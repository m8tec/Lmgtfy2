using System.Net.WebSockets;
using System.Text;
using lmgtfy_api.Systems;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace lmgtfy_api.Controllers
{
    public class LiveSocketController : ControllerBase
    {
        private static readonly List<WebSocket> ConnectedSockets = new();
        private static Serilog.ILogger Logger = Log.Logger.ForType<LiveSocketController>();

        [Route("/live_ws")]
        public async Task Get()
        {
            if (HttpContext.WebSockets.IsWebSocketRequest)
            {
                using var webSocket = await HttpContext.WebSockets.AcceptWebSocketAsync();

                lock (ConnectedSockets)
                    ConnectedSockets.Add(webSocket);

                string? ip = HttpContext.Connection.RemoteIpAddress?.ToString();
                Logger.Debug("WebSocket connected from {ip}", ip);

                await HandleWebSocketConnection(webSocket);
            }
            else
            {
                HttpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
            }
        }

        public static async Task SendQuery(string query, float queryId)
        {
            Logger.Debug("Query update: {query}", query);

            // Combine the components into a single message string
            string message = $"update|{queryId}|{query}";

            await SendToAllAsync(message);
        }

        private static async Task SendToAllAsync(string message)
        {
            var buffer = Encoding.UTF8.GetBytes(message);

            foreach (var socket in ConnectedSockets)
            {
                try
                {
                    if (socket.State == WebSocketState.Open)
                    {
                        await socket.SendAsync(new ArraySegment<byte>(buffer, 0, buffer.Length),
                            WebSocketMessageType.Text, true, CancellationToken.None);
                    }
                }
                catch (WebSocketException)
                {
                    // Handle WebSocket exceptions (e.g., connection closed)
                }
            }
        }

        private static async Task HandleWebSocketConnection(WebSocket webSocket)
        {
            var buffer = new byte[1024 * 4];
            WebSocketReceiveResult result;

            while (webSocket.State == WebSocketState.Open)
            {
                try
                {
                    result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

                    if (result.MessageType == WebSocketMessageType.Close)
                    {
                        // WebSocket connection is closing
                        Logger.Debug("WebSocket was closed");

                        lock (ConnectedSockets)
                            ConnectedSockets.Remove(webSocket);

                        break;
                    }
                }
                catch (WebSocketException)
                {
                    // Handle WebSocket exceptions (e.g., connection closed)
                    break;
                }
            }
        }
    }
}


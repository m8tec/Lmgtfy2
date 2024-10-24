using System.Net.WebSockets;
using System.Text;
using lmgtfy_api.Systems;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace lmgtfy_api.Controllers
{
    public class QueryLoggerSocketController : ControllerBase
    {
        private const int MaxMessageSize = 1024 * 4; // Define maximum message size (e.g., 4 KB)
        public Serilog.ILogger Logger = Log.Logger.ForType<QueryLoggerSocketController>();

        // Create a dictionary to store WebSocket connections and their associated GUIDs
        private readonly Dictionary<WebSocket, float?> socketToQueryIdMap = new();

        [Route("/lmgtfy_ws")]
        public async Task Get()
        {
            HttpContext.Response.Headers.Add("Access-Control-Allow-Origin", "https://lmgtfy2.com");
            HttpContext.Response.Headers.Add("Access-Control-Allow-Credentials", "true");

            // accept web socket request
            if (HttpContext.WebSockets.IsWebSocketRequest)
            {
                using var webSocket = await HttpContext.WebSockets.AcceptWebSocketAsync();

                // log new socket connection
                string? ip = HttpContext.Connection.RemoteIpAddress?.ToString();
                Logger.Information("WebSocket connected from {ip}", ip);

                await HandleWebSocketConnection(webSocket);
            }
            // block other request types
            else
            {
                Logger.Warning("Non-WebSocket request made to /lmgtfy_ws");
                Logger.Information("Request Method: {Method}", HttpContext.Request.Method);

                HttpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
            }
        }

        private async Task HandleWebSocketConnection(WebSocket webSocket)
        {
            var buffer = new byte[MaxMessageSize]; // Adjust buffer size to match maximum message size
            WebSocketReceiveResult result;

            while (webSocket.State == WebSocketState.Open)
            {
                try
                {
                    result = await webSocket.ReceiveAsync(
                        new ArraySegment<byte>(buffer),
                        CancellationToken.None
                    );

                    // Check if the message size exceeds the maximum allowed size
                    if (result.Count > MaxMessageSize)
                    {
                        Logger.Warning("Received message exceeds maximum allowed size");
                        await webSocket.CloseAsync(
                            WebSocketCloseStatus.MessageTooBig,
                            "Message too big",
                            CancellationToken.None
                        );
                        break;
                    }

                    // handle incoming text
                    if (result.MessageType == WebSocketMessageType.Text)
                    {
                        string message = Encoding.UTF8.GetString(buffer, 0, result.Count);

                        float? queryId = null;
                        bool found = false;
                        lock (socketToQueryIdMap)
                            found = socketToQueryIdMap.TryGetValue(webSocket, out queryId);

                        // save query and get id
                        queryId = QuerySavingSystem.UpdateQuery(message, queryId);

                        if (!found)
                        {
                            lock (socketToQueryIdMap)
                                socketToQueryIdMap[webSocket] = queryId;
                        }

                        await LiveSocketController.SendQuery(message, queryId.Value);
                    }
                    // handle closed socket
                    else if (result.MessageType == WebSocketMessageType.Close)
                    {
                        Logger.Information("WebSocket was closed");

                        // Remove the WebSocket and its associated GUID from the dictionary within the lock
                        lock (socketToQueryIdMap)
                            socketToQueryIdMap.Remove(webSocket);

                        break;
                    }
                }
                catch (WebSocketException)
                {
                    // Handle WebSocket exceptions (e.g., connection closed)

                    // Remove the WebSocket and its associated GUID from the dictionary within the lock
                    lock (socketToQueryIdMap)
                        socketToQueryIdMap.Remove(webSocket);

                    break;
                }
            }
        }
    }
}

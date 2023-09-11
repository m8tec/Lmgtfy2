using System.Net.WebSockets;
using System.Text;
using lmgtfy_api.Systems;
using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace lmgtfy_api.Controllers
{
    public class QueryLoggerSocketController : ControllerBase
    {
        public Serilog.ILogger Logger = Log.Logger.ForType<QueryLoggerSocketController>();

        // Create a dictionary to store WebSocket connections and their associated GUIDs
        private readonly Dictionary<WebSocket, float?> socketToQueryIdMap = new();

        [Route("/lmgtfy_ws")]
        public async Task Get()
        {
            // accept web socket request
            if (HttpContext.WebSockets.IsWebSocketRequest)
            {
                using var webSocket = await HttpContext.WebSockets.AcceptWebSocketAsync();

                // log new socket connection
                string? ip = HttpContext.Connection.RemoteIpAddress?.ToString();
                Logger.Debug("WebSocket connected from {ip}", ip);

                await HandleWebSocketConnection(webSocket);
            }
            // block other request types
            else
            {
                HttpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
            }
        }

        private async Task HandleWebSocketConnection(WebSocket webSocket)
        {
            var buffer = new byte[1024 * 4];
            WebSocketReceiveResult result;

            while (webSocket.State == WebSocketState.Open)
            {
                try
                {
                    result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

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
                        Logger.Debug("WebSocket was closed");

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

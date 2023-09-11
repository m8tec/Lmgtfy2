using System.Net;
using System.Reflection;
using Serilog;

namespace LMGTFY2_Server.Systems
{
    public class ConnectionSystem
    {
        private HttpListener _httpListener;
        private string ServerUrl { get; set; }

        public static ConnectionSystem Instance { get; set; }

        public ILogger Logger = Log.Logger.ForType(typeof(ConnectionSystem));

        private ConnectionSystem()
        {
            //ServerUrl = $"http://{(Equals(ip, IPAddress.Any) ? "+" : ip.ToString())}:80/";
            ServerUrl = "http://+:80/";

            Instance = this;
            Instance.Server();
        }

        public static void Start()
        {
            _ = new ConnectionSystem();
        }

        private void Server()
        {
            string rootPath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) + "/Library/Site";

            using (_httpListener = new HttpListener())
            {
                _httpListener.Prefixes.Add(ServerUrl);

                try
                {
                    _httpListener.Start();
                }
                catch (HttpListenerException e)
                {
                    Logger.Error(e.Message);
                    return;
                }

                while (true)
                {
                    HttpListenerContext context;
                    context = _httpListener.GetContext();

                    new Task(() =>
                    {
                        HttpListenerRequest request = context.Request;
                        HttpListenerResponse response = context.Response;

                        Logger.Verbose($"Request from {request.RemoteEndPoint}: {request.HttpMethod} {request.Url?.PathAndQuery}");

                        byte[] data = null;
                        try
                        {
                            if (request.Url is not null)
                            {
                                // block everything except GET
                                if (request.HttpMethod != "GET")
                                {
                                    response.StatusCode = 405;
                                    response.OutputStream.Close();
                                    return;
                                }

                                // store localPath as editable var
                                string localPath = request.Url.LocalPath;

                                // redirect search query
                                if (localPath == "/" && request.QueryString.HasKeys())
                                {
                                    // Redirect to /query/
                                    response.StatusCode = 302; // Found (temporary redirect)
                                    response.AddHeader("Location", "/query/" + request.Url.Query);
                                    response.OutputStream.Close();
                                    return;
                                }

                                // redirect index.html to parentFolder/
                                if (localPath.EndsWith("/index.html"))
                                {
                                    string newPath = localPath.TrimEnd("/index.html".ToCharArray()) + "/";
                                    response.StatusCode = 302; // Found (temporary redirect)
                                    response.AddHeader("Location", newPath);
                                    response.OutputStream.Close();
                                    return;
                                }

                                if (localPath.EndsWith("/"))
                                    localPath += "index.html";

                                data = File.ReadAllBytes(rootPath + localPath);
                            }
                        }
                        catch (Exception exception)
                        {
                            data = Array.Empty<byte>();

                            response.StatusCode = exception switch
                            {
                                FileNotFoundException or DirectoryNotFoundException => 404,
                                UnauthorizedAccessException => 403,
                                _ => 500
                            };
                        }

                        Stream output = response.OutputStream;
                        if (data is not null)
                            output.Write(data, 0, data.Length);
                        output.Close();
                    }).Start();
                }
            }
        }
    }
}


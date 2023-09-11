using lmgtfy_api.Objects;
using System.Text.Json;
using Newtonsoft.Json;
using JsonSerializer = System.Text.Json.JsonSerializer;
using Object = System.Object;

namespace lmgtfy_api.Systems
{
    public static class JsonSystem
    {
        public static T Load<T>(string parentPath)
        {
            string path = $"{parentPath}{typeof(T).Name}.json";
            Object obj;

            if (File.Exists(path))
                obj = JsonSerializer.Deserialize<T>(File.ReadAllText(path), new JsonSerializerOptions()
                {
                    PropertyNameCaseInsensitive = true
                }) ??
                      throw new InvalidOperationException();
            else
                obj = Activator.CreateInstance(typeof(T)) ?? throw new InvalidOperationException();

            (obj as JsonSavable)?.Save(parentPath);

            return (T)obj;
        }

        public static void Save(string filename, string path, Object obj)
        {
            string json = JsonConvert.SerializeObject(obj, Formatting.Indented);

            if (!string.IsNullOrEmpty(path))
                Directory.CreateDirectory(path);

            File.WriteAllText($@"{path}{filename}.json", json);
        }
    }
}


using lmgtfy_api.Systems;

namespace lmgtfy_api.Objects
{
    public class JsonSavable
    {
        public void Save(string path = "") => JsonSystem.Save(GetType().Name, path, this);
    }
}


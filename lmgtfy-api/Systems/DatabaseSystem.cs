using lmgtfy_api.Objects;

namespace lmgtfy_api.Systems
{
	public static class DatabaseSystem
	{
        private const string DbMacPath = "/Users/m8/Documents/ProjectExternals/";
        private const string DbMainPath = "/Users/m8/Documents/";
        private static string DbPath = "";

        public static LmgtfyDb Database { get; set; } = new();

        public static void Init()
        {
            DbPath = Directory.Exists(DbMacPath) ? DbMacPath : DbMainPath;
            Database = JsonSystem.Load<LmgtfyDb>(DbPath);
        }

        public static void Save()
        {
            Database.Save(DbPath);
        }
    }
}

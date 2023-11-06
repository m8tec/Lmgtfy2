using lmgtfy_api.Objects;

namespace lmgtfy_api.Systems
{
	public static class DatabaseSystem
	{
        private static string DbPath = "/app/ProjectExternals/";

        public static LmgtfyDb Database { get; set; } = new();

        public static void Init()
        {
            Database = JsonSystem.Load<LmgtfyDb>(DbPath);
        }

        public static void Save()
        {
            Database.Save(DbPath);
        }
    }
}

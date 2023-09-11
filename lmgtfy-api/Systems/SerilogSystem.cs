using Serilog;
using Serilog.Core;
using Serilog.Events;
using Serilog.Templates;
using Serilog.Templates.Themes;
using ILogger = Serilog.ILogger;

namespace lmgtfy_api.Systems
{
    public static class SerilogExtensions
    {
        public static ILogger ForType<T>(this ILogger logger)
        {
            return logger.ForContext(Constants.SourceContextPropertyName, typeof(T).Name);
        }

        public static ILogger ForType(this ILogger logger, Type type)
        {
            return logger.ForContext(Constants.SourceContextPropertyName, type.Name);
        }
    }

    public static class SerilogLogger
    {
        private static bool _isInitialized;

        private static readonly TemplateTheme Theme = new(new Dictionary<TemplateThemeStyle, string>
        {
            [TemplateThemeStyle.Text] = "\u001B[38;5;0253m",
            [TemplateThemeStyle.SecondaryText] = "\u001B[38;5;0246m",
            [TemplateThemeStyle.TertiaryText] = "\u001B[38;5;0242m",
            [TemplateThemeStyle.Invalid] = "\u001B[33;1m",
            [TemplateThemeStyle.Null] = "\u001B[38;5;0038m",
            [TemplateThemeStyle.Name] = "\u001B[38;5;0081m",
            [TemplateThemeStyle.String] = "\u001B[38;5;0216m",
            [TemplateThemeStyle.Number] = "\u001B[38;5;151m",
            [TemplateThemeStyle.Boolean] = "\u001B[38;5;0038m",
            [TemplateThemeStyle.Scalar] = "\u001B[38;5;0079m",
            [TemplateThemeStyle.LevelVerbose] = "\u001B[34m",
            [TemplateThemeStyle.LevelDebug] = "\u001b[36m",
            [TemplateThemeStyle.LevelInformation] = "\u001B[32m",
            [TemplateThemeStyle.LevelWarning] = "\u001B[33;1m",
            [TemplateThemeStyle.LevelError] = "\u001B[31;1m",
            [TemplateThemeStyle.LevelFatal] = "\u001B[31;1m"
        });

        public static LoggingLevelSwitch LevelSwitch { get; } = new();

        public static void Init(LogEventLevel level)
        {
            if (_isInitialized) return;
            _isInitialized = true;

            LevelSwitch.MinimumLevel = level;

            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.ControlledBy(LevelSwitch)
                .Enrich.WithThreadId()
                .Enrich.WithThreadName()
                .Enrich.FromLogContext()
                .WriteTo.Console(new ExpressionTemplate(
                    template:
                    "[{@t:HH:mm:ss.fff}] ({ThreadId}{#if ThreadName is not null}/{ThreadName}{#end}) [{@l}] {#if SourceContext is not null}[{SourceContext}] {#end}{#if @p['Player'] is not null}[{@p['Player']}] {#end}{@m:lj}\n{@x}",
#if DEBUG
                    theme: Theme
#else
                    theme: null
#endif
                ))
                /*
                .WriteTo.File(
                  "TXServer.log",
                  rollingInterval: RollingInterval.Day,
                  rollOnFileSizeLimit: true
                )
                */
                .CreateLogger();
        }
    }
}
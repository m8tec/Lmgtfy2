#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 446

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["lmgtfy-server/lmgtfy-server.csproj", "lmgtfy-server/"]
COPY ["lmgtfy-api/lmgtfy-api.csproj", "lmgtfy-api/"]
COPY ["lmgtfy-server/Library/SiteTemplates/", "/src/lmgtfy-server/Library/SiteTemplates/"]

RUN dotnet restore "lmgtfy-server/lmgtfy-server.csproj"
COPY . .
WORKDIR "/src/lmgtfy-server"
RUN dotnet build "lmgtfy-server.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "lmgtfy-server.csproj" -c Release -o /app/publish /p:UseAppHost=false
COPY ["lmgtfy-server/Library/SiteTemplates/", "/app/publish/Library/SiteTemplates/"]

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "lmgtfy-server.dll"]

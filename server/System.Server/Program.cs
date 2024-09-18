using System.Repository;
using DnsClient;
using Microsoft.AspNetCore.Cors;
using Serilog;

//global using Microsoft.Extensions.Options;
//global using Microsoft.Extensions.Configuration;
//global using Microsoft.AspNetCore.Mvc;
//global using Serilog;
//global using MongoDB.Bson;


//using System.Text;
//using System.Globalization;
//using Microsoft.AspNetCore.DataProtection;
//using System.Security.Cryptography;
//using Microsoft.AspNetCore.Diagnostics;
//using Microsoft.AspNetCore.Builder;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Cors;
//using System;

var configuration = new ConfigurationBuilder()
.SetBasePath(Directory.GetCurrentDirectory())
.AddJsonFile("appsettings.json")
.AddEnvironmentVariables()
.Build();

//string[] allowedOrigins = configuration.GetSection("AllowedOrigins").Get<string[]>();

var builder = WebApplication.CreateBuilder(args);

//builder.Host.UseSerilog((ctx, lc) => lc
//    .WriteTo.Console());

// Add services to the container.
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("CorsPolicy",
//        policy =>
//        {
//            string environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
//            if (environment == "Development.local")
//                policy.SetIsOriginAllowed(_ => true);
//            else
//                policy.WithOrigins(allowedOrigins.ToArray());
//            policy.AllowAnyHeader().WithMethods("OPTIONS", "HEAD", "CONNECT", "GET", "POST", "PUT", "DELETE", "PATCH")
//            .AllowCredentials();
//        });
//});
////builder.Services.AddRazorPages();
builder.Services.Configure<MongoDatabaseSettings>(builder.Configuration.GetSection(nameof(MongoDatabaseSettings)));
builder.Services.AddSingleton<MongoRepository>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
//if (!app.Environment.IsDevelopment())
//{
//    app.UseExceptionHandler("/Error");
//    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//   // app.UseHsts();

//}
app.UseSwagger();
app.UseSwaggerUI();
//app.UseSwaggerUI(c =>
//{
//    c.SwaggerEndpoint("https://localhost:7032/swagger/index.html", "My API V1");
//    //c.SwaggerEndpoint("https://localhost:7169/swagger/index.html", "My API V1");
//});
//app.UseCors("CorsPolicy");
//app.UseHttpsRedirection();
app.MapGet("/", [EnableCors("*")] () => "Server is running");
//Log.Information($"Server Environment: {Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}");

//app.UseStaticFiles();

//app.UseRouting();

//app.UseAuthorization();

//app.MapRazorPages();
// app.MapControllers();
app.Run();

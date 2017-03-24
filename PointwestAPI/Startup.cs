using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PointwestAPI.Startup))]
namespace PointwestAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
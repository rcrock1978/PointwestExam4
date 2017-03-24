using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin;
using Owin;
using PointwestAPI.Persistence;

namespace PointwestAPI
{
    public partial class Startup
    {
        public void ConfigureAuth(IAppBuilder app)
        {
            app.Use(CUSTOMERDBContext.Create());
        }
    }
}
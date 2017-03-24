using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PointwestAPI.Persistence
{
    public partial class CUSTOMERDBContext
    {
        public static CUSTOMERDBContext Create()
        {
            return new CUSTOMERDBContext();
        }
    }
}
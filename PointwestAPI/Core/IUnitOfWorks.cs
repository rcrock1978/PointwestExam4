using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PointwestAPI.Core.Repositories;

namespace PointwestAPI.Core
{
    public interface IUnitOfWorks
    {
        ICustomers Customer { get; }
        void Complete();
    }
}


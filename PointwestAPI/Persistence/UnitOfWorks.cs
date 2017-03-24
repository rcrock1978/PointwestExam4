using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PointwestAPI.Persistence.Repositories;
using PointwestAPI.Core;
using PointwestAPI.Core.Repositories;


namespace PointwestAPI.Persistence
{
    public class UnitOfWorks : IUnitOfWorks
    {
        private readonly CUSTOMERDBContext _context;

        public ICustomers Customer
        {
            get;
            private set;
        }

        public UnitOfWorks(CUSTOMERDBContext context)
        {
            _context = context;
            Customer = new CustomerRepository(context);  
        }

        public void Complete()
        {
            _context.SaveChanges();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PointwestAPI.Core.Repositories;

namespace PointwestAPI.Persistence.Repositories
{
    public class CustomerRepository : ICustomers
    {
        private readonly CUSTOMERDBContext _context;

        public CustomerRepository(CUSTOMERDBContext context)
        {
            _context = context;
        }

       
        public void Add(Customer cust)
        {
            _context.Customers.Add(cust);
        }

        public void Remove(int Id)
        {
            var cust = GetCustomer(Id);
            if (cust != null)
            {
                _context.Customers.Remove(cust);
            }
        }

        public Customer GetCustomer(int Id)
        {
            return _context.Customers.SingleOrDefault(c => c.Id == Id);
        }

        public Customer GetCustomerByFirstName(string FirstName)
        {
            return _context.Customers.SingleOrDefault(c => c.First_Name == FirstName);
        }

        public IEnumerable<Customer> GetCustomers()
        {
            return _context.Customers.ToList();
        }

        public void Update(int Id, Customer cust)
        {
            var customer = GetCustomer(Id);

            _context.Customers.Remove(customer);
            _context.Customers.Add(cust);

        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PointwestAPI.Persistence;

namespace PointwestAPI.Core.Repositories
{
    public interface ICustomers
    {
        Customer GetCustomer(int Id);
        Customer GetCustomerByFirstName(string FirstName);
        IEnumerable<Customer> GetCustomers();
        void Add(Customer cust);
        void Update(int Id, Customer cust);
        void Remove(int Id);
    }
}

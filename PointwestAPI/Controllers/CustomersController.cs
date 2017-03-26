using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PointwestAPI.Core.Dtos;
using PointwestAPI.Persistence;
using PointwestAPI.Core;
using System.Web.Http.Cors;

namespace PointwestAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CustomersController : ApiController
    {
        private readonly IUnitOfWorks _unitOfWork;
       public CustomersController(IUnitOfWorks unitOfwork)
        {
            _unitOfWork = unitOfwork;
        }

        [HttpPost]
        public IHttpActionResult Add(CustomerDto cust)
        {
            try
            {
                Customer customer = new Customer();
                customer.First_Name = cust.First_Name;
                customer.Last_Name = cust.Last_Name;
                customer.BirthDate = cust.BirthDate;

                _unitOfWork.Customer.Add(customer);
                _unitOfWork.Complete();

                return Ok(customer);

            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex.Source + " " + ex.InnerException.Message);
            }

        }

        [HttpDelete]
        public IHttpActionResult Delete(int Id)
        {
            try
            {
                _unitOfWork.Customer.Remove(Id);
                _unitOfWork.Complete();

                return Content(HttpStatusCode.OK, "Customer Deleted");

            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex.Source + " " + ex.InnerException.Message);
            }
       }

        [HttpPut]
        public IHttpActionResult Edit(int Id, CustomerDto cust)
        {
            try
            {
                Customer customer = new Customer();
                customer.First_Name = cust.First_Name;
                customer.Last_Name = cust.Last_Name;
                customer.BirthDate = cust.BirthDate;

                _unitOfWork.Customer.Update(Id, customer);
                _unitOfWork.Complete();

                return Ok(customer);

            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex.Source + " " + ex.InnerException.Message);
            }
        }

        [HttpGet]
        public IHttpActionResult Get()
        {
            try
            {
                var content = _unitOfWork.Customer.GetCustomers();
                return Ok(content);

            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex.Source + " " + ex.InnerException.Message);
            }
        }

        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            try
            {
                var content = _unitOfWork.Customer.GetCustomer(id);
                return Ok(content);

            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex.Source + " " + ex.InnerException.Message);
            }
        }

    }
}

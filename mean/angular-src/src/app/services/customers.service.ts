import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomersService {
  customer: any;

  constructor(private http: Http) { }

  getCustomers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get('http://pointwestapi-dev.us-west-2.elasticbeanstalk.com/api/customers', { headers: headers })
      .map(res => res.json());
  }

  addCustomer(customer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://pointwestapi-dev.us-west-2.elasticbeanstalk.com/api/customers', customer, { headers: headers })
      .map(res => res.json());
  }


  updateCustomer(id, customer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.put('https://pointwestapi-dev.us-west-2.elasticbeanstalk.com/api/customers/' + id, customer, { headers: headers })
      .map(res => res.json());
  }

  getCustomerbyId(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get('http://pointwestapi-dev.us-west-2.elasticbeanstalk.com/api/customers/' + id, { headers: headers })
      .map(res => res.json());
  }

  removeCustomer(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.delete('http://pointwestapi-dev.us-west-2.elasticbeanstalk.com/api/customers/' + id, { headers: headers })
      .map(res => res.json());
  }

}

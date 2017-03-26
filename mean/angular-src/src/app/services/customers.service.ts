import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomersService {

  constructor(private http: Http) { }

  getCustomers(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get('http://pointwestapi-dev.us-west-2.elasticbeanstalk.com/api/customers',  { headers: headers })
      .map(res => res.json());
  }

}

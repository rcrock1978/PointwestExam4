import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

    validateRegister(customer) {
      if (customer.Last_Name == undefined ||
          customer.First_Name == undefined ||
          customer.BirthDate == undefined ) {
            return false;
      } else {
        return true;
      }
  }

}



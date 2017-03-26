import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  firstname: String;
  lastname: String;
  birthdate: String;

  constructor(private flashMessage: FlashMessagesService,
              private customerService: CustomersService,
              private router: Router,
              private validateService: ValidateService) { }

  ngOnInit() {
  }

  onAddSubmit() {
    console.log('onAddSubmit()')

    const customer = {
      Last_Name: this.lastname,
      First_Name: this.firstname,
      BirthDate: this.birthdate
    }

    //Required Fields
    if (!this.validateService.validateRegister(customer)) {
      this.flashMessage.show('Please fill in all fields', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
      return false;
    }



    this.customerService.addCustomer(customer).subscribe(data => {
      if (data.Id) {
        this.flashMessage.show("You added new Customer named: " + data.First_Name + " " + data.Last_Name , {
          cssClass: 'alert-success',
          timeout: 5000 
        });
        this.router.navigate(['dashboard'])
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        this.router.navigate([''])
      }
    });

  }

}

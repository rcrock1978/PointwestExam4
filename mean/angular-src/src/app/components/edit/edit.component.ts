import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})

export class EditComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  firstname: String;
  lastname: String;
  birthdate: Date;


  constructor(private route: ActivatedRoute,
    private customerService: CustomersService,
    private flashMessage: FlashMessagesService,
    private router: Router) {}
  

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.customerService.getCustomerbyId(this.id).subscribe(
        cust => {
          this.firstname = cust.First_Name;
          this.lastname = cust.Last_Name;
          this.birthdate = new Date(cust.BirthDate);
        }, err => {

        });

    });
  }


  onUpdateSubmit(id) {
    console.log('onUpdateSubmit()')

    const customer = {
      Last_Name: this.lastname,
      First_Name: this.firstname,
      BirthDate: this.birthdate
    }

    this.customerService.updateCustomer(id, customer).subscribe(data => {
      if (data.Id) {
        this.flashMessage.show("You Customer named: " + data.Last_Name + " , were updated", {
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}

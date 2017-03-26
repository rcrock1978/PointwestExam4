import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  firstname: String;
  lastname: String;
  birthdate: String;


  constructor(overlay: Overlay,
    vcRef: ViewContainerRef,
    public modal: Modal,
    private route: ActivatedRoute,
    private customerService: CustomersService,
    private router: Router,
    private flashMessage: FlashMessagesService, ) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.customerService.getCustomerbyId(this.id).subscribe(
        cust => {
          this.firstname = cust.First_Name;
          this.lastname = cust.Last_Name;
          this.birthdate = new Date(cust.BirthDate).toDateString();
        }, err => {

        });

    });
  }

  onDeleteCustomer() {
    const button = this.modal.confirm()
      .size('lg')
      .isBlocking(true)
      .showClose(true)
      .keyboard(27)
      .title('Delete Customer')
      .body('Are you sure?  You want to remove this customer from the list')
      .okBtn('Delete')
      .open()
      .then(dialog => dialog.result)
      .then(result => this.fullfilled(result))
      .catch(err => console.log("CANCELED"));
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  fullfilled(result) {
    if (result) {
      this.customerService.removeCustomer(this.id).subscribe(
        cust => {
          this.flashMessage.show("Your Customer named: " + this.firstname + " " + this.lastname + " were deleted!", {
            cssClass: 'alert-danger',
            timeout: 5000
          });
          this.router.navigate(['dashboard'])
        }, err => {

        });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customers: Object;
  selectedRow: Number;


  constructor(private customerService: CustomersService) { }


  ngOnInit() {
    this.customerService.getCustomers().subscribe(
         cust => {
            this.customers = cust;
         }, err => {

         });
  }

  setClickedRow(index) {
    this.selectedRow = index;
  }

}

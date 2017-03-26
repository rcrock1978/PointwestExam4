//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { RemoveComponent } from './components/remove/remove.component';

//services
import { CustomersService } from './services/customers.service';
import { ValidateService } from './services/validate-service.service';

//module
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'remove/:id', component: RemoveComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    HomeComponent,
    EditComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    DateValueAccessorModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [CustomersService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

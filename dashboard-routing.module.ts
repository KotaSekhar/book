import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookformComponent } from '../bookform/bookform.component';
import { BuyabookformComponent } from '../buyabookform/buyabookform.component';
import { PurchasedbookformComponent } from '../purchasedbookform/purchasedbookform.component';
import { ReaderformComponent } from '../readerform/readerform.component';
import { SearchbookformComponent } from '../searchbookform/searchbookform.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent, 
  children:[
    {path:'createbook', component:BookformComponent},
    {path:'readerform',component:ReaderformComponent},
    {path:'searchbookform',component:SearchbookformComponent},
    {path:'readbookform',component:PurchasedbookformComponent},
    {path:'buyabookform',component:BuyabookformComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

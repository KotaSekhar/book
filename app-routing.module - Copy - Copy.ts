import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { ReaderformComponent } from './readerform/readerform.component';
import { RegistraionformComponent } from './registraionform/registraionform.component';
import { SearchbookformComponent } from './searchbookform/searchbookform.component';

const routes: Routes = [
  
    {path:'dashboard',loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'loginform',component:LoginformComponent},
    {path:'registrationform',component:RegistraionformComponent},
  
    
    { path: '', redirectTo: '/loginform', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

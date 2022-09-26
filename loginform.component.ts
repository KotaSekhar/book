import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginformService } from '../loginform.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(public loginformService:LoginformService,private formBuilder: FormBuilder,private route:Router) {

    this.form = this.formBuilder.group(
      {
       
        username: [
          '',
          [
            Validators.required,
            , Validators.pattern('^[a-zA-Z\\s -]+$'), Validators.maxLength(25), Validators.minLength(3)]
          ]
        ,
        password:['', Validators.compose([
          Validators.required,
          , Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,30})'), Validators.maxLength(14), Validators.minLength(8)])]
       
   })
   }
   get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
  }
  login(){
  console.log(this.form.value);
  this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    //Ajax call
    this.loginformService.login(this.form.value).subscribe((response : any
      )=>{
        console.log(response)
        localStorage.setItem("token", response.accessToken);
        localStorage.setItem("role", response.roles)
        localStorage.setItem("email", response.email)
        this.route.navigate(['/dashboard']) 
      },
     
     
      )
   

}
}

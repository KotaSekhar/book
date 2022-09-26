import { Component, OnInit } from '@angular/core';
import { RegistrationformService } from '../registrationform.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registraionform',
  templateUrl: './registraionform.component.html',
  styleUrls: ['./registraionform.component.scss']
})
export class RegistraionformComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  message!: string;
  hidebutton: boolean = false;
  constructor(public registrationformService: RegistrationformService, private formBuilder: FormBuilder, private route: Router) {

    
    this.form = this.formBuilder.group(
      {

        username: [
          '',
          Validators.compose([
            Validators.required,
            , Validators.pattern('^[a-zA-Z\\s -]+$'), Validators.maxLength(20), Validators.minLength(3)])
        ]
        ,
        email: ['', Validators.required],
        password: ['', Validators.compose([
          Validators.required,
          , Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,30})'), Validators.maxLength(14), Validators.minLength(8)])
        ],
        role: ['', Validators.required]
      })
  }



  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void {
  }

  registration() {
    console.log(this.form.value);
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    //Ajax call
    this.registrationformService.registration(this.form.value).subscribe((response: any
    ) => {
      this.message = response.message;
      this.hidebutton = true;
      setInterval(() => {
        this.hidebutton = false;
        this.route.navigate(['/loginform'])
      }, 4000);
      this.form.reset();
    },
    )
  }
}

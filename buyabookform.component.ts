import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyabookformService } from '../buyabookform.service';

@Component({
  selector: 'app-buyabookform',
  templateUrl: './buyabookform.component.html',
  styleUrls: ['./buyabookform.component.scss']
})
export class BuyabookformComponent implements OnInit {


  form: FormGroup;
  submitted = false;
  message!:string;
  hidebutton:boolean=false;

  // book:Book=new Book('danger','POETRY','kumar','500','raju','loooooogo')
  constructor(public buyabookformService:BuyabookformService,private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        bookId:['',Validators.required],
        readerName: [
          '',
         Validators.compose([
            Validators.required,
            , Validators.pattern('^[a-zA-Z\\s -]+$'), Validators.maxLength(25), Validators.minLength(3)])
          ]
        ,
        readerEmailId:['',Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(6)])],
      
   })
  }
  books:any =[];
ngOnInit(): void {
  
}
get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}
  save(){
    console.log('clicked');
    console.log(this.form);
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    //Ajax call
    this.buyabookformService.buyBook(this.form.value).subscribe((response : any
      )=>{
        this.message = response.response  ;
        this.hidebutton= true;
        setInterval(()=> {
         this.hidebutton = false;
        }, 4000);
      },
      )
  }

}

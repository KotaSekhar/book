import { Component, OnInit } from '@angular/core';
import Book from '../entity/Book';
import { BookService } from '../book.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.scss']
})
export class BookformComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  message!:string;
  hidebutton:boolean=false;

  // book:Book=new Book('danger','POETRY','kumar','500','raju','loooooogo')
  constructor(public bookService:BookService,private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
       
        title: [
          '',
         Validators.compose([
            Validators.required,
            , Validators.pattern('^[a-zA-Z\\s -]+$'), Validators.maxLength(25), Validators.minLength(3)])
          ]
        ,
        category:['',Validators.required],
        price:['',Validators.required],
        publisher:['',Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z\\s -]+$'), Validators.maxLength(20), Validators.minLength(6)])],
        publishedDate:['',Validators.required],
        active:['',Validators.required],
        content:['',Validators.required],
        logo:['',Validators.required]
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
    console.log(this.form.value);
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    //Ajax call
    this.bookService.saveBook(this.form.value).subscribe((response : any
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

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchbookformService } from '../searchbookform.service';

@Component({
  selector: 'app-searchbookform',
  templateUrl: './searchbookform.component.html',
  styleUrls: ['./searchbookform.component.scss']
})
export class SearchbookformComponent implements OnInit {

  form: FormGroup;
  // submitted = false;
  // message!:string;
  // hidebutton:boolean=false;

  // book:Book=new Book('danger','POETRY','kumar','500','raju','loooooogo')
  constructor(public searchbookformService:SearchbookformService,private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group( 
      {
        category: new FormControl(),
        
        price: new FormControl(),
        author: new FormControl(),
        publisher: new FormControl()
      })
    
  }
  
  books:any =[];
ngOnInit(): void {
  console.log();
  this.getBooks()
}

// private getBooks() {
//   this.searchbookformService.getBooks().subscribe((books: any)=>{
//     this.books =books;
//   })}
  
  public getBooks() {
    this.searchbookformService.getBooks(this.form.value).subscribe((books: any)=>{
      this.books =books;
    })}


}

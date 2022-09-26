import { Component, OnInit } from '@angular/core';
import { ReaderformService } from '../readerform.service';

@Component({
  selector: 'app-readerform',
  templateUrl: './readerform.component.html',
  styleUrls: ['./readerform.component.scss']
})
export class ReaderformComponent implements OnInit {
 message!:string;
 hidebutton:boolean=false;
  constructor(public readerformService:ReaderformService) { }
  books:any =[];
ngOnInit(): void {
 this.getBooks()
}
private getBooks() {
this.readerformService.getBooks().subscribe((books: any)=>{
  this.books =books;
})}

 readaBook(bookId: number) {
  this.readerformService.readaBook(bookId).subscribe((books: any)=>{
    this.books =books;
  })

}

deleteBook(bookId: number,readerId: number) {
  const observable = this.readerformService.deleteBook(bookId,readerId).subscribe((response : any
    )=>{ this.message = response.response  ;
      this.hidebutton= true;
      setInterval(()=> {
       this.hidebutton = false;
      }, 4000);
      this.getBooks();
    });
}
}

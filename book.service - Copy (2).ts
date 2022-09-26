import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Book from './entity/Book';

const API_URL = "http://localhost:8088/digitalbooks/author"
const API_READER_URL = "http://localhost:8088/digitalbooks/readers"
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public client : HttpClient) { }

  // getBooks(){
  //   return this.client.post<any[]>(`${API_READER_URL}/${'sekhar@gmail.com'}/books`,null);
  // }


  saveBook(book: Book): Observable<any> {
    console.log(localStorage.getItem('token'))
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token'),
      }),
    };
    return this.client.post<any[]>(`${API_URL}/${1}/books`,book,httpOptions)
    
  }


  // deleteBook(bookId: number,readerId: number) {
  //   return this.client.delete(`${API_READER_URL}/delete/books/${bookId}/${readerId}`);
  // }
}

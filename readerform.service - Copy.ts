import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_READER_URL = "http://localhost:8088/digitalbooks/readers"
@Injectable({
  providedIn: 'root'
})
export class ReaderformService {

  constructor(public client : HttpClient) { }

  getBooks(){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token'),
      }),
    };
    let email=localStorage.getItem('email');
    return this.client.get<any[]>(`${API_READER_URL}/${email}/books`,httpOptions);
  }
  
  readaBook(bookId: number){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token'),
      }),
    };
    let email=localStorage.getItem('email');
    return this.client.post<any[]>(`${API_READER_URL}/${email}/books/${bookId}`,httpOptions);
  }

  deleteBook(bookId: number,readerId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token'),
      }),
    };
    return this.client.delete(`${API_READER_URL}/delete/books/${bookId}/${readerId}`,httpOptions);
  }
}

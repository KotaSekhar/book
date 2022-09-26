import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
// const API_READER_URL = "http://localhost:8088/digitalbooks/books/search/category=na/author=na/price=na/publisher=na"
const API_READER_URL = "http://localhost:8088/digitalbooks/books/search/category=na/author=na/price=na/publisher=na"
@Injectable({
  providedIn: 'root'
})
export class SearchbookformService {

  constructor(public client : HttpClient) { }

  getBooks(form: Form): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token'),
      }),
    };
  
    return this.client.get<any[]>(`${API_READER_URL}`,httpOptions);
  }
}

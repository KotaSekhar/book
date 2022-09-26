import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
const API_URL = "http://localhost:8088/digitalbooks/books/buy"
@Injectable({
  providedIn: 'root'
})
export class BuyabookformService {

  constructor(public client : HttpClient) { }
 
  buyBook(form: Form): Observable<any> {
    console.log(localStorage.getItem('token'))
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token'),
      }),
    };
    return this.client.post<any[]>(`${API_URL}`,form,httpOptions)
    
  }

}

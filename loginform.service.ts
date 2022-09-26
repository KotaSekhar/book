import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8088/api/auth/signin"
@Injectable({
  providedIn: 'root'
})
export class LoginformService {

  constructor(public client : HttpClient) { }
  
  login(form: Form): Observable<any> {
    console.log(form)
    return this.client.post<any[]>(`${API_URL}`,form)
    
  }
}

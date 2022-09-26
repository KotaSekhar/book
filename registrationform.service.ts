import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
const API_URL = "http://localhost:8088/api/auth/signup"

@Injectable({
  providedIn: 'root'
})
export class RegistrationformService {

  constructor(public client : HttpClient) { }

  registration(form: Form): Observable<any> {
    console.log(form)
    return this.client.post<any[]>(`${API_URL}`,form)
    
  }
}

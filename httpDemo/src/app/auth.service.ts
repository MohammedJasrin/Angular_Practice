import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { AuthResponse } from '../authResponse';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8081'

  constructor(private http:HttpClient) { }


  getToken(user:User):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.url}/authenticate`,user)
  }

  loginUser(jwt:string){
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwt}`);
    return this.http.get(`${this.url}/greet`,{headers,responseType:'text' as 'json'})
  }


}

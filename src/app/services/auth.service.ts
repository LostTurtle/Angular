import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(data: {email: string; password: string}) {
    this.http.post('http://localhost:3000/auth/signin', data).subscribe(
      data => console.log(data),
      err => console.error(err)
    )
  }

  signup(data: {name:string, email: string; password: string}) {
    this.http.post('http://localhost:3000/auth/signup', data).subscribe(
      data => console.log(data),
      err => console.error(err)
    )
  }
}

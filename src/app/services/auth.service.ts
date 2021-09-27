import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { USER } from '../interfaces/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }

  signin(data: {email: string; password: string}) {
    this.http.post<{user: USER, token: string}>('http://localhost:3000/auth/signin', data).subscribe(
      response => {
        this.userService.setUser(response.user, response.token);
        this.router.navigateByUrl('/')
      },
      error => console.log(error)
    )
  }

  signup(data: {name:string, email: string; password: string}) {
    this.http.post('http://localhost:3000/auth/signup', data).subscribe(
      data => {
        this.router.navigateByUrl('/signin')
      },
      err => console.error(err)
    )
  }

  signout () {
    this.userService.clear();
    this.router.navigateByUrl('/signin');
  }
}

import { Injectable } from '@angular/core';
import { ILogin } from '../models/todo.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string = 'admin';
  password: string = '123456';
  isSucces: boolean = false;

  constructor(private router: Router) { }


  onLogin(data: ILogin) {

    if (data.username === this.username && data.password === this.password) {
      this.isSucces = true;
      this.router.navigate(['todo'])
      console.log(`grişi durumu:${this.isSucces}`);
    }
  }

  onLogout() {
    this.isSucces = false
    this.router.navigate([''])
  }

}

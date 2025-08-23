import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import {Authservice} from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  username = signal('');
  password = signal('');
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}
  
  login() {
    if (this.username().trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if(this.password().trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      let res = this.auth.login(this.username(), this.password());
      if(res === 200) {
        this.router.navigate(['home']);
      }
      if(res === 403) {
        this.errorMsg = "Invalid Credentials"
      }
    }
  }
}

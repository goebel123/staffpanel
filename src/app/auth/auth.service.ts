import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  token: String;

  constructor(private router: Router) {}

  isAuthenticated() {
    return this.token != null;
  }

  login(name: String, password: String) {
    if (name === 'henrik') {
      this.token = 'amk';
      this.router.navigate(['/dashboard']);
    } else {
      console.log('wrong login!');
    }
  }

  logout() {
    this.token = null;
    this.router.navigate(['/signin']);
  }

}

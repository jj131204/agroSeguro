import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private readonly LOGIN_COOKIE_NAME = 'token'; // Nombre de tu cookie de login

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  isLoggedIn(): boolean {
    return this.cookieService.check(this.LOGIN_COOKIE_NAME);
  }

}

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    HttpClientModule
  ]
})
export class LoginComponent {

  loginData = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}


  login() {
    const body = new HttpParams()
      .set('username', this.loginData.username)
      .set('password', this.loginData.password);

    this.http.post<any>('http://127.0.0.1:8000/api/login/token', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).subscribe({
      next: (response) => {
        console.log('✅ Token:', response.access_token);
        localStorage.setItem('token', response.access_token);

          this.router.navigate(['']);

        // Puedes guardarlo en localStorage o pasar a otra vista
      },
      error: (err) => {
        console.error('❌ Error en login:', err);
        alert('Credenciales incorrectas');
      }
    });
  }
}

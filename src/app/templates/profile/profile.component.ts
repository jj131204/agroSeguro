import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class ProfileComponent implements OnInit {
  finca: any = null;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarFinca();
  }

  cargarFinca() {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>('http://127.0.0.1:8000/api/finca', { headers })
      .subscribe({
        next: (data) => {
          this.finca = data;
        },
        error: (error) => {
          this.errorMessage = 'Error al cargar la finca';
          console.error(error);
        }
      });
  }
}

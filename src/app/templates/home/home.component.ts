import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoggedIn = false;

  ultimaTemp: number | null = null;
  ultimaHum: number | null = null;
  ultimaFecha: string = '';
  ultimaHora: string = '';
  alerta: string = '';

  private intervalId: any;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
    } else {
      this.cargarUltimaMedida();
      this.intervalId = setInterval(() => this.cargarUltimaMedida(), 60000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  cargarUltimaMedida() {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>('http://127.0.0.1:8000/api/sensor/ultima_medida/SENSOR_1', { headers })
      .subscribe({
        next: (data) => {
          const fecha = new Date(data.hora);
          this.ultimaTemp = data.temp;
          this.ultimaHum = data.hum;
          this.ultimaFecha = fecha.toLocaleDateString('es-CO', {
            weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
          });
          this.ultimaHora = fecha.toLocaleTimeString('es-CO', {
            hour: '2-digit', minute: '2-digit'
          });
          this.alerta = this.getAlerta(data.temp);
        },
        error: (err) => console.error('Error al cargar última medida', err)
      });
  }

  getAlerta(temp: number): string {
    if (temp > 30) return 'Temp. alta';
    if (temp < 10) return 'Temp. baja';
    return 'Sin anomalías';
  }
}

import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../services/sensor-service.service';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PanelComponent implements OnInit {
  medidas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>('http://127.0.0.1:8000/api/sensor/medidas/SENSOR_1', { headers })
      .subscribe({
        next: (data) => this.medidas = data,
        error: (err) => console.error('❌ Error al obtener medidas', err)
      });
  }

  formatearFecha(fecha: string): string {
    return new Date(fecha).toLocaleDateString();
  }

  formatearHora(fecha: string): string {
    return new Date(fecha).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  getAlerta(temp: number): string {
    if (temp > 30) return 'Temp. alta';
    if (temp < 10) return 'Temp. baja';
    return 'Sin anomalias';
  }
}


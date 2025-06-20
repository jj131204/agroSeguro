// sensor.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})

export class SensorService {
  private baseUrl = 'http://127.0.0.1:8000/api/sensor';

  constructor(private http: HttpClient) {}

  getMedidasPorSensor(codigo: string) {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.baseUrl}/medidas/${codigo}`, { headers });
  }
}

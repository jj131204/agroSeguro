import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "./components/header-component/header-component.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponentComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agroSeguro';

  mostrarHeader: boolean = true; // Variable para controlar la visibilidad del header

  constructor(private router: Router) {
    // Suscríbete a los eventos del router
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Verifica si la URL actual es la de login
      // Asume que tu ruta de login es '/login'
      this.mostrarHeader = !event.url.includes('/login');
    });
  }
}

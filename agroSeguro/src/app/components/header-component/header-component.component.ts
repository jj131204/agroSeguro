import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
  imports: [
    CommonModule
  ]
})
export class HeaderComponentComponent implements OnInit {

  mostrarHeader: boolean = true;
  isLoggedIn: boolean = false;
  userName: string | null = null;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) { 

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Asume que tu ruta de login es '/login'
      this.mostrarHeader = !event.url.includes('/login');
    });
  }


  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}

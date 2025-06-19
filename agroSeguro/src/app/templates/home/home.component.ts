import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthServiceService) {     
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}

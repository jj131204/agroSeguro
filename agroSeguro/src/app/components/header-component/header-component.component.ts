import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
  imports: [
    CommonModule
  ]
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

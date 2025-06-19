import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css'],
  imports: [
    CommonModule
  ]
})
export class ModalComponentComponent implements OnInit {

@Input() title = '';
  @Input() description = '';
  @Input() buttonText = 'Aceptar';
  @Input() iconClass = 'bi-x-circle';
  @Input() iconColor = '#ec523a';

  // @Output() buttonClick = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  isVisible = true;

  onButtonClick() {
      this.closeModal();
      window.location.reload();
  }

  closeModal() {
    this.isVisible = false;
    this.closed.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}

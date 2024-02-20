import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-slide-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-panel.component.html',
  styleUrl: './slide-panel.component.css'
})
export class SlidePanelComponent {
  @Input() isOpen: boolean = false;
  @Input() headerText!: string
  @Output() onClose = new EventEmitter();

  onClosePanel() {
    this.onClose.emit(false)
  }
}



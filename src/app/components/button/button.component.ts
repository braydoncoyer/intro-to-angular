import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText = '';
  @Output() buttonClickEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onButtonClick() {
    this.buttonClickEvent.emit();
  }

}

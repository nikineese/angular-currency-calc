import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() currency!: string;
  @Input() value = 0;
  @Output() valueChanges = new EventEmitter<number>();

  changes() {
    this.valueChanges.emit(this.value);
  }
}

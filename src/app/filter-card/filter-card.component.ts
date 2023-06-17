import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.css'],
})
export class FilterCardComponent {
  @Input() title = '';
  @Input() operator = '';
  @Input() value = '';
  @Input() isDefault = false;
}

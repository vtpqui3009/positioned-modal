import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  title = 'angular-filter';
  isDefault = false;
  filterData = [
    {
      id: 1,
      isDefault: true,
      title: 'test 1',
      operator: 'equal',
      value: '1',
    },

    {
      id: 2,
      isDefault: true,
      title: 'test 2',
      operator: 'equal',
      value: '2',
    },

    {
      id: 3,
      isDefault: true,
      title: 'test 3',
      operator: 'equal',
      value: '3',
    },
    {
      id: 4,
      isDefault: true,
      title: 'test 4',
      operator: 'equal',
      value: '4',
    },

    {
      id: 5,
      isDefault: true,
      title: 'test 5',
      operator: 'equal',
      value: '5',
    },

    {
      id: 6,
      isDefault: true,
      title: 'test 6',
      operator: 'equal',
      value: '6',
    },
    {
      id: 7,
      isDefault: true,
      title: 'test 7',
      operator: 'equal',
      value: '7',
    },

    {
      id: 8,
      isDefault: true,
      title: 'test 8',
      operator: 'equal',
      value: '8',
    },
    {
      id: 9,
      isDefault: true,
      title: 'test 9',
      operator: 'equal',
      value: '9',
    },

    {
      id: 10,
      isDefault: true,
      title: 'test 10',
      operator: 'equal',
      value: '10',
    },
  ];
}

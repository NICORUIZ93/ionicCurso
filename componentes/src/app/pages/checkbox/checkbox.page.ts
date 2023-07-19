import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage {
  data = [
    {
      name: 'primary',
      selected: true,
    },
    {
      name: 'secondary',
      selected: false,
    },
    {
      name: 'danger',
      selected: true,
    },
    {
      name: 'success',
      selected: false,
    },
  ];
  constructor() {}

  onClick(item: any) {
    console.log(item);
  }
}

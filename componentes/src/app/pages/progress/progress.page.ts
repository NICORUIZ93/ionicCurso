import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage {
  porcentaje: number = 0.5;
  constructor() {}

  changeProgress(event) {
    this.porcentaje = event.detail.value / 100;

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage {
  data: any[] = [];
  constructor() {}

  doRefresh(event) {
    setTimeout(() => {
      this.data.push(...Array(10));
      event.target.complete();
    }, 2000);
  }
}

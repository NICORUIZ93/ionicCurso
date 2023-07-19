import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data = Array(20);
  constructor() {}

  loadData() {
    setTimeout(() => {
      if (this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const dataNew = Array(20);
      this.data.push(...dataNew);
      this.infiniteScroll.complete();
    }, 1000);
  }
}

import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  news: Observable<any[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.news = this.newsService.getNews();
  }
}

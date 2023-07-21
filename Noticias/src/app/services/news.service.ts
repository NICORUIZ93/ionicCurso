import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http
      .get<any[]>(environment.url, {
        params: { apiKey: environment.key },
      })
      .pipe(map((article: any) => article.articles));
  }
}

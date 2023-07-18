import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private Http: HttpClient) {}

  getPost() {
    return this.Http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      tap(console.log)
    );
  }
}

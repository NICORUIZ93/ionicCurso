import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Componentes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(tap(console.log));
  }

  getMenuOps() {
    return this.http.get<Componentes[]>('/assets/data/menu.json');
  }
}

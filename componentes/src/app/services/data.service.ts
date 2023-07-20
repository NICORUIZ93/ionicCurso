import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums, Componentes, Superheroes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOps() {
    return this.http.get<Componentes[]>('/assets/data/menu.json');
  }

  getAlbums() {
    return this.http.get<Albums[]>('/assets/data/albums.json');
  }

  getSuperHeroes() {
    return this.http.get<Superheroes[]>('/assets/data/superheroes.json');
  }
}

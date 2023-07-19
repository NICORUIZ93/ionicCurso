import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Componentes } from './interfaces/interfaces';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  menu: Observable<Componentes[]>;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.menu = this.dataService.getMenuOps();
  }
}

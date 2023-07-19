import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users: Observable<any>;
  @ViewChild(IonList) ionList: IonList;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.users = this.dataService.getData();
  }

  favorite(user: any) {
    console.log('Favorito !!! ', user);
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    console.log('Eliminado !!! ', user);
    this.ionList.closeSlidingItems();
  }
}

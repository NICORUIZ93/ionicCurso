import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Albums } from '../../interfaces/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  albums: Albums[];
  textoBuscar: string = '';
  @ViewChild(IonSearchbar) ionSearchbar: IonSearchbar;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAlbums();
  }

  onSearchChange() {
    this.textoBuscar = this.ionSearchbar.value;
  }

  getAlbums() {
    this.dataService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }
}

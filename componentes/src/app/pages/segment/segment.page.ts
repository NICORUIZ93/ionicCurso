import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Superheroes } from '../../interfaces/interfaces';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment) ionSegment: IonSegment;
  publisher: string = '';

  superheroes: Superheroes[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getSuperHeroes();
  }

  segmentChanged() {
    this.publisher = this.ionSegment.value.toString();
  }

  getSuperHeroes() {
    this.dataService.getSuperHeroes().subscribe((data) => {
      this.superheroes = data;
    });
  }
}

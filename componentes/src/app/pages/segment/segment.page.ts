import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Superheroes } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment) ionSegment: IonSegment;

  superheroes: Observable<Superheroes[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getSuperHeroes();
  }

  segmentChanged() {
    console.log(this.ionSegment.value);
  }

  getSuperHeroes() {
    this.superheroes = this.dataService.getSuperHeroes();
  }
}

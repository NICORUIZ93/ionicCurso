import { PushService } from './services/push.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private pushService: PushService) {}

  ngOnInit() {
    this.pushService.configuracionInicial();
  }
}

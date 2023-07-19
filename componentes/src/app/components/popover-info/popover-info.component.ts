import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent {
  items = Array(40);
  constructor(private popoverController: PopoverController) {}
  onClick(id) {
    console.log(id);
    this.popoverController.dismiss({ id: id });
  }
}

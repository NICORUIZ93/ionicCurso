import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage {
  id: number;
  roleMsg = '';
  constructor(private popoverController: PopoverController) {}

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      backdropDismiss: false,
      component: PopoverInfoComponent,
      event: e,
    });

    await popover.present();

    const { data, role } = await popover.onDidDismiss();
    this.id = data.id;
 
    this.roleMsg = `Popover dismissed with role: ${role}`;
  }
}

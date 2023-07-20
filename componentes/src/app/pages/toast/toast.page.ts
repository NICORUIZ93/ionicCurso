import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage {
  constructor(private toastController: ToastController) {}

  async toast() {
    const toast = await this.toastController.create({
      message: 'Hola',
      header: 'Titulo',
      duration: 1000,
      animated: true,
      translucent: true,
      color: 'warning',
      layout: 'stacked',
    });

    toast.present();
  }
}

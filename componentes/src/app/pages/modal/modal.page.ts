import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  message = 'Este es un mensaje desde el padre';
  mensajeHijo: any;
  constructor(private modalCrtl: ModalController) {}

  async openModal() {
    const modal = await this.modalCrtl.create({
      component: ModalInfoPage,
      componentProps: { mensaje: this.message },
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    this.mensajeHijo = data.mensajeHijo;
    console.log(this.mensajeHijo);

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
}

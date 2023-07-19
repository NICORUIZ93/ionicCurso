import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage {
  @Input() mensaje: string;
  constructor(private modalController: ModalController) {}

  sinArg() {
    this.modalController.dismiss();
  }

  conArg() {
    this.modalController.dismiss({
      mensajeHijo: 'Este es un mensaje desde el hijo',
    });
  }
}

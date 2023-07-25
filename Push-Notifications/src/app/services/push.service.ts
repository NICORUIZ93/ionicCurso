import { Injectable } from '@angular/core';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

@Injectable({
  providedIn: 'root',
})
export class PushService {
  constructor(private oneSignal: OneSignal) {}

  configuracionInicial() {
    this.oneSignal.startInit(
      '93c600b2-af09-4885-abd5-70ea8558e1fe',
      '970903229474'
    );

    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.InAppAlert
    );

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      console.log('Notificacion recibida ', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      console.log('Notificacion abierta ', noti);
    });

    this.oneSignal.endInit();
  }
}

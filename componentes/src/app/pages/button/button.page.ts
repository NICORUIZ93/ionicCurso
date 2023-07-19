import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage {
  favorito: boolean = false;

  favoritoClick() {
    this.favorito = !this.favorito;
  }
}

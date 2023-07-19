import { Component, OnInit } from '@angular/core';

interface Componente {
  name: string;
  redirect: string;
  icon: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirect: '/action-sheet',
    },
    {
      icon: 'american-football',
      name: 'Alert',
      redirect: '/alert',
    },
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirect: '/action-sheet',
    },
  ];
  constructor() {}
}

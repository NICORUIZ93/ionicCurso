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
      name: 'button',
      redirect: '/button',
    },
    {
      icon: 'american-football',
      name: 'avatar',
      redirect: '/avatar',
    },
    {
      icon: 'american-football',
      name: 'card',
      redirect: '/card',
    },
    {
      icon: 'american-football',
      name: 'checkbox',
      redirect: '/checkbox',
    },
    {
      icon: 'american-football',
      name: 'date',
      redirect: '/date',
    },
    {
      icon: 'american-football',
      name: 'fab',
      redirect: '/fab',
    },
    {
      icon: 'american-football',
      name: 'grid',
      redirect: '/grid',
    },
    {
      icon: 'american-football',
      name: 'infinite-scroll',
      redirect: '/infinite-scroll',
    },
    {
      icon: 'american-football',
      name: 'input',
      redirect: '/input',
    },
    {
      icon: 'american-football',
      name: 'list',
      redirect: '/list',
    },
  ];
  constructor() {}
}

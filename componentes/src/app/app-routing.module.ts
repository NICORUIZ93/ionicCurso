import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: 'alert',
    loadChildren: () =>
      import('./pages/alert/alert.module').then((m) => m.AlertPageModule),
  },
  {
    path: 'action-sheet',
    loadChildren: () =>
      import('./pages/action-sheet/action-sheet.module').then(
        (m) => m.ActionSheetPageModule
      ),
  },
  {
    path: 'avatar',
    loadChildren: () =>
      import('./pages/avatar/avatar.module').then((m) => m.AvatarPageModule),
  },
  {
    path: 'button',
    loadChildren: () =>
      import('./pages/button/button.module').then((m) => m.ButtonPageModule),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./pages/card/card.module').then((m) => m.CardPageModule),
  },
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./pages/checkbox/checkbox.module').then(
        (m) => m.CheckboxPageModule
      ),
  },
  {
    path: 'date',
    loadChildren: () =>
      import('./pages/date/date.module').then((m) => m.DatePageModule),
  },
  {
    path: 'fab',
    loadChildren: () =>
      import('./pages/fab/fab.module').then((m) => m.FabPageModule),
  },
  {
    path: 'grid',
    loadChildren: () =>
      import('./pages/grid/grid.module').then((m) => m.GridPageModule),
  },
  {
    path: 'infinite-scroll',
    loadChildren: () =>
      import('./pages/infinite-scroll/infinite-scroll.module').then(
        (m) => m.InfiniteScrollPageModule
      ),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./pages/input/input.module').then((m) => m.InputPageModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/list.module').then((m) => m.ListPageModule),
  },
  {
    path: 'list-reorder',
    loadChildren: () =>
      import('./pages/list-reorder/list-reorder.module').then(
        (m) => m.ListReorderPageModule
      ),
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./pages/loading/loading.module').then((m) => m.LoadingPageModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/menu/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/alert',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'alert',
        loadChildren: () =>
          import('src/app/pages/alert/alert.module').then(
            (m) => m.AlertPageModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('src/app/pages/search/search.module').then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: 'fab',
        loadChildren: () =>
          import('src/app/pages/fab/fab.module').then((m) => m.FabPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FiltroPipe } from 'src/app/pipes/filtro.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ComponentsModule,
    PipesModule,
  ],
  declarations: [SearchPage],
})
export class SearchPageModule {}

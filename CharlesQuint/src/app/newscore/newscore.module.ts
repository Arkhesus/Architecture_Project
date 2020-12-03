import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewscorePageRoutingModule } from './newscore-routing.module';

import { NewscorePage } from './newscore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewscorePageRoutingModule
  ],
  declarations: [NewscorePage]
})
export class NewscorePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatumPageRoutingModule } from './datum-routing.module';

import { DatumPage } from './datum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatumPageRoutingModule
  ],
  declarations: [DatumPage]
})
export class DatumPageModule {}

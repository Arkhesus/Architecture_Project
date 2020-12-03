import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayResultPageRoutingModule } from './display-result-routing.module';

import { DisplayResultPage } from './display-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayResultPageRoutingModule
  ],
  declarations: [DisplayResultPage]
})
export class DisplayResultPageModule {}

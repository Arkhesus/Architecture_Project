import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedplayerPageRoutingModule } from './selectedplayer-routing.module';

import { SelectedplayerPage } from './selectedplayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedplayerPageRoutingModule
  ],
  declarations: [SelectedplayerPage]
})
export class SelectedplayerPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerAbsencePageRoutingModule } from './player-absence-routing.module';

import { PlayerAbsencePage } from './player-absence.page';
import { PresenceCompComponent } from '../presence-comp/presence-comp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerAbsencePageRoutingModule
  ],
  declarations: [PlayerAbsencePage, PresenceCompComponent]
})
export class PlayerAbsencePageModule {}

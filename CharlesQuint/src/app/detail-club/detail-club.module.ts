import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailClubPageRoutingModule } from './detail-club-routing.module';

import { DetailClubPage } from './detail-club.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailClubPageRoutingModule
  ],
  declarations: [DetailClubPage]
})
export class DetailClubPageModule {}

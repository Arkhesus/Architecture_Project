import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerAbsencePage } from './player-absence.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerAbsencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerAbsencePageRoutingModule {}

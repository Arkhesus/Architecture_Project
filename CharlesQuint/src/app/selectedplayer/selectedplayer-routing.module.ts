import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedplayerPage } from './selectedplayer.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedplayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedplayerPageRoutingModule {}

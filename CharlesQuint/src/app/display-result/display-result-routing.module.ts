import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayResultPage } from './display-result.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayResultPageRoutingModule {}

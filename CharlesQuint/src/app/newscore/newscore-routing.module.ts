import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewscorePage } from './newscore.page';

const routes: Routes = [
  {
    path: '',
    component: NewscorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewscorePageRoutingModule {}

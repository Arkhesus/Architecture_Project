import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailClubPage } from './detail-club.page';

const routes: Routes = [
  {
    path: '',
    component: DetailClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailClubPageRoutingModule {}

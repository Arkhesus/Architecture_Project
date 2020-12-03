import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-result',
    loadChildren: () => import('./add-result/add-result.module').then( m => m.AddResultPageModule)
  },
  {
    path: 'datum',
    loadChildren: () => import('./datum/datum.module').then( m => m.DatumPageModule)
  },
  {
    path: 'detail-club',
    loadChildren: () => import('./detail-club/detail-club.module').then( m => m.DetailClubPageModule)
  },
  {
    path: 'display-result',
    loadChildren: () => import('./display-result/display-result.module').then( m => m.DisplayResultPageModule)
  },
  {
    path: 'match',
    loadChildren: () => import('./match/match.module').then( m => m.MatchPageModule)
  },
  {
    path: 'newscore',
    loadChildren: () => import('./newscore/newscore.module').then( m => m.NewscorePageModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'player-absence',
    loadChildren: () => import('./player-absence/player-absence.module').then( m => m.PlayerAbsencePageModule)
  },
  {
    path: 'selectedplayer',
    loadChildren: () => import('./selectedplayer/selectedplayer.module').then( m => m.SelectedplayerPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

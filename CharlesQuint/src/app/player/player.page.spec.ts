import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayerPage } from './player.page';

import {RouterTestingModule} from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';
import { AngularFirestore } from '@angular/fire/firestore';

// describe('PlayerPage', () => {
//   let component: PlayerPage;
//   let fixture: ComponentFixture<PlayerPage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ PlayerPage ],
//       imports: [RouterTestingModule.withRoutes(
//         routes), AngularFireModule.initializeApp(firebaseConfig)]
//     }).compileComponents();

//     fixture = TestBed.createComponent(PlayerPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

const routes: Routes = [
  {
    path: '',
    component: PlayerPage,
    children: [
      {
        path: 'match/:team',
        loadChildren: () => import('../match/match.module').then( m => m.MatchPageModule)
      },

    ]}
  ];
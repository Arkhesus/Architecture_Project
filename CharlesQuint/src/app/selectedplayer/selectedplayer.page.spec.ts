import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectedplayerPage } from './selectedplayer.page';

import {RouterTestingModule} from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';
import { AngularFirestore } from '@angular/fire/firestore';

// describe('SelectedplayerPage', () => {
//   let component: SelectedplayerPage;
//   let fixture: ComponentFixture<SelectedplayerPage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SelectedplayerPage ],
//       imports: [RouterTestingModule.withRoutes(
//         routes), AngularFireModule.initializeApp(firebaseConfig)]
//     }).compileComponents();

//     fixture = TestBed.createComponent(SelectedplayerPage);
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
    component: SelectedplayerPage,
    children: [
      {
        path: 'match/:team',
        loadChildren: () => import('../match/match.module').then( m => m.MatchPageModule)
      },

    ]}
  ];

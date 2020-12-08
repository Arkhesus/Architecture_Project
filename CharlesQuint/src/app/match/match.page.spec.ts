import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchPage } from './match.page';

import {RouterTestingModule} from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';
import { AngularFirestore } from '@angular/fire/firestore';


// describe('MatchPage', () => {
//   let component: MatchPage;
//   let fixture: ComponentFixture<MatchPage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ MatchPage ],
//       imports: [RouterTestingModule.withRoutes(
//         routes), AngularFireModule.initializeApp(firebaseConfig),RouterModule.forRoot([])]
//     }).compileComponents();

//     fixture = TestBed.createComponent(MatchPage);
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
    component: MatchPage,
    children: [
      {
        path: 'player/:team/:week',
        loadChildren: () => import('../player/player.module').then( m => m.PlayerPageModule)
      },
      {
        path: 'tabs/tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
    ]}
  ];
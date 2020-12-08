import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewscorePage } from './newscore.page';

import {RouterTestingModule} from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';
import { AngularFirestore } from '@angular/fire/firestore';

// describe('NewscorePage', () => {
//   let component: NewscorePage;
//   let fixture: ComponentFixture<NewscorePage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ NewscorePage ],
//       imports: [RouterTestingModule.withRoutes(
//         routes), AngularFireModule.initializeApp(firebaseConfig)]
//     }).compileComponents();

//     fixture = TestBed.createComponent(NewscorePage);
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
    component: NewscorePage,
    children: [
      {
        path: 'add-result',
        loadChildren: () => import('../add-result/add-result.module').then( m => m.AddResultPageModule)
      },

    ]}
  ];

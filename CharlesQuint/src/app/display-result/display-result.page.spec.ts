import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayResultPage } from './display-result.page';

import {RouterTestingModule} from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';
import { AngularFirestore } from '@angular/fire/firestore';


// describe('DisplayResultPage', () => {
//   let component: DisplayResultPage;
//   let fixture: ComponentFixture<DisplayResultPage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DisplayResultPage ],
//       imports: [RouterTestingModule.withRoutes(
//         routes), AngularFireModule.initializeApp(firebaseConfig),RouterModule.forRoot([])]
//     }).compileComponents();

//     fixture = TestBed.createComponent(DisplayResultPage);
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
    component: DisplayResultPage,
    children: [
      {
        path: 'tabs/tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },

    ]}
  ];
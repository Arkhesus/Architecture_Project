import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab5Page } from './tab5.page';

import {RouterTestingModule} from "@angular/router/testing";
import { Routes } from '@angular/router';

import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';


// describe('Tab5Page', () => {
//   let component: Tab5Page;
//   let fixture: ComponentFixture<Tab5Page>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ Tab5Page ],
//       imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(
//         routes), AngularFireModule.initializeApp(firebaseConfig)]
//     }).compileComponents();

//     fixture = TestBed.createComponent(Tab5Page);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeFalse();
//   });
// });

const routes: Routes = [
  {
    path: '',
    component: Tab5Page,
    children: [
      {
        path: 'tabs/tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tabs/tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tabs/tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tabs/tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
    ]}
  ];
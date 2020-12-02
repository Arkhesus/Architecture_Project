import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Tab4Page } from './tab4.page';

import {RouterTestingModule} from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';


describe('Tab4Page', () => {
  let component: Tab4Page;
  let fixture: ComponentFixture<Tab4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab4Page ],
      imports: [RouterTestingModule.withRoutes(
        routes), AngularFireModule.initializeApp(firebaseConfig)]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
    children: [
      {
        path: 'tabs/tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },

    ]}
  ];
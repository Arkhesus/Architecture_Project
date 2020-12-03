import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Tab2Page } from './tab2.page';
import {RouterTestingModule} from "@angular/router/testing";

import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';
import { AngularFirestore } from '@angular/fire/firestore';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  let firestore : AngularFirestore;
  
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      providers: [],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(
        routes), AngularFireModule.initializeApp(firebaseConfig)]
    }).compileComponents();

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('method', () => {
    it("should get info", () => {
      expect(true).toBeTruthy();
      expect(component.bool).toBeTrue();
    });
  });



});

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'tabs/tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      }
    ]}
  ];

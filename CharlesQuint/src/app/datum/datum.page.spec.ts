import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatumPage } from './datum.page';

import {RouterTestingModule} from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';
import { AngularFirestore } from '@angular/fire/firestore';

describe('DatumPage', () => {
  let component: DatumPage;
  let fixture: ComponentFixture<DatumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatumPage ],
      imports: [RouterTestingModule.withRoutes(
        routes), AngularFireModule.initializeApp(firebaseConfig)]
    }).compileComponents();

    fixture = TestBed.createComponent(DatumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('method', () => {
    it("should get correct back url", () => {
      component.week = "Semaine01";
      expect(component.goBack()).toContain('player-absence/Semaine01');
    });
  });
});

const routes: Routes = [
  {
    path: '',
    component: DatumPage,
    children: [
      {
        path: 'player-absence/:week',
        loadChildren: () => import('../player-absence/player-absence.module').then( m => m.PlayerAbsencePageModule)
      },

    ]}
  ];
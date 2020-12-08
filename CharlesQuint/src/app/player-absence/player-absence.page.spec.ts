import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayerAbsencePage } from './player-absence.page';

import {RouterTestingModule} from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';
import { AngularFirestore } from '@angular/fire/firestore';

describe('PlayerAbsencePage', () => {
  let component: PlayerAbsencePage;
  let fixture: ComponentFixture<PlayerAbsencePage>;
  let firestore : AngularFirestore;
  let activatedRouter: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerAbsencePage ],
      imports: [RouterTestingModule.withRoutes(
        routes), AngularFireModule.initializeApp(firebaseConfig)]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerAbsencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('method', () => {
    it("should presence be true", () => {
      component.week = "1";
      component.doc = "a";
      component.Update("Laurent", "present");
      expect(component.bool).toBeTrue();
    });
    it("should get correct next url", () => {
      component.week = "1";
      expect(component.goTo("Laurent")).toContain("datum/1/Laurent");
    });
    it("should get correct back url", () => {
      expect(component.goBack()).toContain('tabs/tab5');
    });
  });
});

const routes: Routes = [
  {
    path: '',
    component: PlayerAbsencePage,
    children: [
      {
        path: 'datum/:week/:player',
        loadChildren: () => import('../datum/datum.module').then( m => m.DatumPageModule)
      },
      {
        path: 'tabs/tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },

    ]}
  ];
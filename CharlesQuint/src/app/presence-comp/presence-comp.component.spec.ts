import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresenceCompComponent } from './presence-comp.component';

import {RouterTestingModule} from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';
import { AngularFirestore } from '@angular/fire/firestore';

import { ActivatedRoute } from '@angular/router';

describe('PresenceCompComponent', () => {
  let component: PresenceCompComponent;
  let fixture: ComponentFixture<PresenceCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenceCompComponent ],
      imports: [ AngularFireModule.initializeApp(firebaseConfig), RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PresenceCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

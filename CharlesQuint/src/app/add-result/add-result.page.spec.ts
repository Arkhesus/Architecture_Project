import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddResultPage } from './add-result.page';

import {RouterTestingModule} from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';
import { AngularFirestore } from '@angular/fire/firestore';


describe('AddResultPage', () => {
  let component: AddResultPage;
  let fixture: ComponentFixture<AddResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResultPage ],
      imports: [RouterTestingModule.withRoutes(
        routes), AngularFireModule.initializeApp(firebaseConfig)]
    }).compileComponents();

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    fixture = TestBed.createComponent(AddResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('method', () => {
    it("should get correct next url", () => {
      expect(component.goTo("EquipeA")).toContain("newscore/EquipeA");
    });
    it("should get correct back url", () => {
      expect(component.goBack()).toContain('tabs/tab3');
    });
    it("should get info", () => {
      expect(component.getInfo()).toBeTrue();
    });
  });

});

const routes: Routes = [
  {
    path: '',
    component: AddResultPage,
    children: [
      {
        path: 'tabs/tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'newscore/:team',
        loadChildren: () => import('../newscore/newscore.module').then( m => m.NewscorePageModule)
      },

    ]}
  ];
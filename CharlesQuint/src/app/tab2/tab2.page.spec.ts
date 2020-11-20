import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { Tab2Page } from './tab2.page';
import {RouterTestingModule} from "@angular/router/testing";
import { Tab1Page } from '../tab1/tab1.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  let firestore : AngularFirestore;
  
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule.withRoutes(
        [{path: '', component: Tab1Page}, {path: 'tabs/tab2', component: Tab2Page}])]
    }).compileComponents();

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

// describe("Get database info", () => {
  
//   let component: Tab2Page;
//   let firestore : AngularFirestore;


// });
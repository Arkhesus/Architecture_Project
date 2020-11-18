import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  let firestore : AngularFirestore;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get info', () => {
    const field = 'equipe A';
    component.getInfo(firestore, field);
    expect(component.bool).toBe(true);
  });
});

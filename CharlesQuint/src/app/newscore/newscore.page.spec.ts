import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewscorePage } from './newscore.page';

describe('NewscorePage', () => {
  let component: NewscorePage;
  let fixture: ComponentFixture<NewscorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewscorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

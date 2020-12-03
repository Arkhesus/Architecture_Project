import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayResultPage } from './display-result.page';

describe('DisplayResultPage', () => {
  let component: DisplayResultPage;
  let fixture: ComponentFixture<DisplayResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

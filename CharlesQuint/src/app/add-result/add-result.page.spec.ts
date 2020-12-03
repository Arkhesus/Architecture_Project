import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddResultPage } from './add-result.page';

describe('AddResultPage', () => {
  let component: AddResultPage;
  let fixture: ComponentFixture<AddResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

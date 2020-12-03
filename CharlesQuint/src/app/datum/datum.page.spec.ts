import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatumPage } from './datum.page';

describe('DatumPage', () => {
  let component: DatumPage;
  let fixture: ComponentFixture<DatumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

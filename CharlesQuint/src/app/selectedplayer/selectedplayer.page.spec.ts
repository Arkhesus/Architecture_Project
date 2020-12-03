import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectedplayerPage } from './selectedplayer.page';

describe('SelectedplayerPage', () => {
  let component: SelectedplayerPage;
  let fixture: ComponentFixture<SelectedplayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedplayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

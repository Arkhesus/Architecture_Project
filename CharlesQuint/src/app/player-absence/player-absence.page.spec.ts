import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayerAbsencePage } from './player-absence.page';

describe('PlayerAbsencePage', () => {
  let component: PlayerAbsencePage;
  let fixture: ComponentFixture<PlayerAbsencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerAbsencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerAbsencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

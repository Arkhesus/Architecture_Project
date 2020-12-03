import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailClubPage } from './detail-club.page';

describe('DetailClubPage', () => {
  let component: DetailClubPage;
  let fixture: ComponentFixture<DetailClubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailClubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

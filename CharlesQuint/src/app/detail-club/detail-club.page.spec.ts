import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailClubPage } from './detail-club.page';

import {RouterTestingModule} from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule} from '@angular/fire';
import { firebaseConfig } from '../app.module';
import { AngularFirestore } from '@angular/fire/firestore';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';



// describe('DetailClubPage', () => {
//   let component: DetailClubPage;
//   let fixture: ComponentFixture<DetailClubPage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DetailClubPage ],
//       imports: [RouterTestingModule.withRoutes(
//         routes), AngularFireModule.initializeApp(firebaseConfig)]
//     }).compileComponents();

//     fixture = TestBed.createComponent(DetailClubPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;


//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// const routes: Routes = [
//   {
//     path: '',
//     component: DetailClubPage,
//     children: [
//       {
//         path: 'tabs/tab4',
//         loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
//       },

//     ]}
//   ];
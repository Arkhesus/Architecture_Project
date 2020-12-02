import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { EmailComposer} from '@ionic-native/email-composer/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';


export const firebaseConfig = {
  apiKey: 'AIzaSyAKOo1PVTpWH1b2mZift7FY342kfeNU_40',
  authDomain: 'charles-quint.firebaseapp.com',
  databaseURL: 'https://charles-quint.firebaseio.com',
  projectId: 'charles-quint',
  storageBucket: 'charles-quint.appspot.com',
  messagingSenderId: '139350958040',
  appId: '1:139350958040:web:6b63f3976fb12a87d2dcad',
  measurementId: 'G-V2QL6QN92X'
};




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    EmailComposer,
    PreviewAnyFile,
    Toast,
    AngularFirestore,
    NavController,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

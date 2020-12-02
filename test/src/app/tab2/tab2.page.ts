import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { NavController } from '@ionic/angular';
import { getLocaleTimeFormat } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  teams: Observable<any[]>;
  bool: boolean;

  constructor() {

}
}

//   teams: Observable<any[]>;
//   bool: boolean;

//   constructor( public navCtrl : NavController, public firestore : AngularFirestore) {
//     console.log('Je m initialise');
//     this.getInfo(firestore, "equipes");

//     // const name: string = this.activatedRouter.snapshot.paramMap.get('name');
//     // console.log(name);




//   }

//   getInfo(firestore, field){
//     this.teams = firestore.collection(field).valueChanges();
//     console.log(this.teams);

//     if(this.teams){
//       this.bool = true;
//       return this.bool;
//     }
//     else {
//       this.bool = false;
//       return this.bool;
//     }
//   }

//   goTo(team){
//     this.navCtrl.navigateForward('match/' + team );
//   }
// }
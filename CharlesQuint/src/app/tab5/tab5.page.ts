import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  liste: Observable<any[]>;

  constructor(public firestore: AngularFirestore, public navCtrl : NavController) { 
    this.getInfo(firestore, 'Equipe A');
  }

  ngOnInit() {
  }

  getInfo(firestore, field){
    this.liste = firestore.collection(field).valueChanges();
    console.log(this.liste);
  }

  goTo(week){
    console.log(week);
    this.navCtrl.navigateForward('player-absence/' + week);
  }

}

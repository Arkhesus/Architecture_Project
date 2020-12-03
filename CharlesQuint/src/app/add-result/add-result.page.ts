import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.page.html',
  styleUrls: ['./add-result.page.scss'],
})
export class AddResultPage implements OnInit {

  teams: Observable<any[]>;

  constructor(public navCtrl: NavController, public firestore : AngularFirestore) {
    this.teams = firestore.collection('equipes').valueChanges();
    console.log(this.teams);
   }

  ngOnInit() {
  }

  goTo(team){
    this.navCtrl.navigateForward('newscore/' + team );
  }
  goBack(){
    this.navCtrl.navigateBack('tabs/tab3');
  }




}

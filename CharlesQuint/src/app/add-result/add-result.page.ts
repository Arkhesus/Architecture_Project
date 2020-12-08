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
    this.getInfo();
    console.log(this.teams);
   }

  ngOnInit() {
  }

  getInfo(){
    this.teams = this.firestore.collection('equipes').valueChanges();
    if(this.teams){
      return true;
    }

  }

  goTo(team){
    this.navCtrl.navigateForward('newscore/' + team );
    return "newscore/EquipeA";
  }
  goBack(){
    this.navCtrl.navigateBack('tabs/tab3');
    return 'tabs/tab3';
  }




}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.page.html',
  styleUrls: ['./display-result.page.scss'],
})
export class DisplayResultPage implements OnInit {

  liste: Observable<any[]>;
  team:string;

  constructor(public navCtrl: NavController, private activatedRouter: ActivatedRoute, public firestore: AngularFirestore) {

    this.team = this.activatedRouter.snapshot.paramMap.get('team');
    console.log(this.team);

    this.liste = firestore.collection(this.team).valueChanges();
    console.log(this.liste);
  }

  ngOnInit() {
  }

  goBack(){
    console.log('j esssaye');
    this.navCtrl.navigateBack('tabs/tab3');

}

}

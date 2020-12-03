import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selectedplayer',
  templateUrl: './selectedplayer.page.html',
  styleUrls: ['./selectedplayer.page.scss'],
})
export class SelectedplayerPage implements OnInit {

  team:string;
  week:string;
  resultArr = [];

  constructor(public navCtrl: NavController, private activatedRouter: ActivatedRoute, public firestore: AngularFirestore) { 
    this.team = this.activatedRouter.snapshot.paramMap.get('team');
    this.week = this.activatedRouter.snapshot.paramMap.get('week');

    this.firestore.collection(this.team , ref => ref.where('week', '==', this.week )).snapshotChanges()
    .subscribe(data => {
      data.forEach(childData => {
        console.log('ChildData');
        // tslint:disable-next-line: no-unused-expression
        const match: string = childData.payload.doc.data()['match'];
        const semaine: string = childData.payload.doc.data()['week'];
        const player1: string = childData.payload.doc.data()['1'];
        const player2: string = childData.payload.doc.data()['2'];
        const player3: string = childData.payload.doc.data()['3'];
        const player4: string = childData.payload.doc.data()['4'];
        const classement: string = childData.payload.doc.data()['classement'];

        this.resultArr.push(match);
        this.resultArr.push(semaine);
        this.resultArr.push(player1);
        this.resultArr.push(player2);
        this.resultArr.push(player3);
        this.resultArr.push(player4);
        this.resultArr.push(classement);


        
        // this.sampleArr.push(childData.payload.doc.data());

        // const htmlStr = "<ion-label>Hello world !!</ion-label>";



      });
    });

  }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.navigateBack('match/' + this.team);
  }

}

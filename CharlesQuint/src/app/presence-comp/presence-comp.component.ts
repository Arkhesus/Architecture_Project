import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-presence-comp',
  templateUrl: './presence-comp.component.html',
  styleUrls: ['./presence-comp.component.scss'],
})
export class PresenceCompComponent implements OnInit {

  liste: Observable<any[]>;
  players = [];

  constructor(public firestore: AngularFirestore, public afDB: AngularFireDatabase, private activatedRouter: ActivatedRoute) {
    const week: string = this.activatedRouter.snapshot.paramMap.get('week');


    this.players.forEach(function (value) {
      console.log(value);
  });

    this.firestore.collection('calendrier', ref => ref.where('Semaine', '==', week )).snapshotChanges()
    .subscribe(data => {
      data.forEach(childData => {
        // tslint:disable-next-line: no-unused-expression
        const player: string = childData.payload.doc.data()['Guillaume'];





      });
    });


    }

  ngOnInit() {

}

// getPlayerList(){

//   let playerList = [];

//   this.firestore.collection('listedeforce', ref => ref.where('role', '==', 'joueur' )).snapshotChanges()
//   .subscribe(data => {
//     data.forEach(childData => {
//       console.log(data);
//       // tslint:disable-next-line: no-unused-expression
//       let player: string = childData.payload.doc.data()['Prenom'];
      
//       playerList.push(player);

      
//       // this.sampleArr.push(childData.payload.doc.data());

//       // const htmlStr = "<ion-label>Hello world !!</ion-label>";



//     });
//   });

//   console.log(playerList);

//   return playerList;


//   }
}


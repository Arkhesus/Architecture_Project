import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-absence',
  templateUrl: './player-absence.page.html',
  styleUrls: ['./player-absence.page.scss'],
})
export class PlayerAbsencePage implements OnInit {
  liste:Observable<any[]>;
  week:string;
  presence = [];
  players = [];
  index:number;
  doc:string;
  bool: boolean;

  constructor(private navCtrl: NavController, public firestore: AngularFirestore, private activatedRouter: ActivatedRoute) {

    this.week = this.activatedRouter.snapshot.paramMap.get('week');

    this.firestore.collection('calendrier', ref => ref.where('Semaine', '==', this.week )).snapshotChanges()
    .subscribe(data => {
      data.forEach(childData => {
        // tslint:disable-next-line: no-unused-expression

        this.doc = childData.payload.doc.data()['doc'];
        console.log(this.doc);


      });
    });

  }



  ngOnInit() {

    // this.add();

    this.liste = this.firestore.collection('listedeforce').valueChanges();

    this.firestore.collection('listedeforce', ref => ref.where('role', '==', 'joueur' )).snapshotChanges()
    .subscribe(data => {
      data.forEach(childData => {

        const player:string = childData.payload.doc.data()['Prenom'];


        this.firestore.collection('calendrier', ref => ref.where('Semaine', '==', this.week )).snapshotChanges()
          .subscribe(data => {
            data.forEach(childData => {
              // tslint:disable-next-line: no-unused-expression

              const people: string = childData.payload.doc.data()[player];
              this.presence.push(people);

            
            // this.sampleArr.push(childData.payload.doc.data());

              // const htmlStr = "<ion-label>Hello world !!</ion-label>";



            });
          });
          


        });
      });

      console.log(this.presence);


     }

  

  goTo(player){
    console.log(player);
    this.navCtrl.navigateForward('datum/' + this.week + '/' + player);
    return 'datum/' + this.week + '/' + player;
  }

  goBack(){
    this.navCtrl.navigateBack('tabs/tab5');
    return 'tabs/tab5';
  }

  Update(name, presence){

    
    const data = {
      [name] : presence
    };

    console.log(data);


    this.firestore.collection('calendrier').doc(this.doc).update(data);
    console.log(this.doc);

    if( presence === 'absent'){
      console.log("je serai absent");

      const resume = name.concat('', presence, '', this.week);

      const liste = {
        [resume] : 'absent'
      };
      this.bool = false;


      this.firestore.collection('absences').doc(this.doc).update(liste);
    }
    if( presence === 'present'){

      const resume = name.concat('', 'absent', '', this.week);

      const liste = {
        [resume] : ''
      };

      this.bool = true;

      this.firestore.collection('absences').doc(this.doc).update(liste);
    }
  }

  // add(){
  //   const data = {
  //     Atanassios: 'present',
  //     Baptiste: 'present',
  //     Benoit: 'present',
  //     Cotet: 'present',
  //     Flavien: 'present',
  //     Francesco: 'present',
  //     Guillaume: 'present',
  //     Kenaël: 'present',
  //     Laurent: 'present',
  //     Loïc: 'present',
  //     Michel: 'present',
  //     Patrick: 'present',
  //     Raymond: 'present',
  //     Sebastien: 'present',
  //     Thierry: 'present',
  //     Tristan: 'present',
  //     Yves: 'present',
  //     week : 'match',
  //     Semaine : 'Semaine 21'

  //   };

  //   this.firestore.collection('calendrier').doc('r').set(data);
  // }


}

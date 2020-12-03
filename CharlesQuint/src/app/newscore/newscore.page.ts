import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newscore',
  templateUrl: './newscore.page.html',
  styleUrls: ['./newscore.page.scss'],
})
export class NewscorePage implements OnInit {
  
  liste: Observable<any[]>
  team: string;
  playerArr = [];

  constructor(public navCtrl: NavController, public firestore: AngularFirestore, private activatedRouter: ActivatedRoute,
              public alertController: AlertController) {
    this.team = this.activatedRouter.snapshot.paramMap.get('team');
    console.log(this.team);

    this.liste = firestore.collection(this.team).valueChanges();
   }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.navigateBack('add-result');
  }

  async presentAlertPrompt(week) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Accès restreint aux sélectionneurs',
      inputs: [
        {
          name: 'score',
          type: 'text',
          placeholder: 'ex : 12 - 4'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log(week);
            this.Update(week, data.score);
            this.goBack();
          }
        }
      ]
    });

    await alert.present();
  }

  Update(week, point){

    console.log(point);


    this.firestore.collection('calendrier', ref => ref.where('Semaine', '==', week )).snapshotChanges()
    .subscribe(data => {
      data.forEach(childData => {

      const lien = childData.payload.doc.data()['doc'];
      console.log(lien);

      const data = {
        score: point,
        state : 'Joué',
      };
  
      this.firestore.collection(this.team).doc(lien).update(data);
  
      this.goBack();

      });
    });




   }

}

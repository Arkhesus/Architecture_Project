import { Component, OnInit } from '@angular/core';

import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  liste: Observable<any[]>
  team: string;
  versus:string;

  constructor(public alertController: AlertController, public navCtrl : NavController, 
              public firestore: AngularFirestore, private activatedRouter: ActivatedRoute) {

    this.team = this.activatedRouter.snapshot.paramMap.get('team');
    console.log(this.team);

    this.liste = firestore.collection(this.team).valueChanges();
    console.log(this.liste);
  }

  async presentAlertPrompt(week, text = "Accès restreint") {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Accès restreint aux sélectionneurs',
      inputs: [

        {
          name: 'password',
          type: 'password',
          placeholder: 'Mots de passe'
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

            if (data.password === "guillaume"){

              this.goTo(this.team, week);
            }
            else{
              data.header = "Mot de passe refusé";
              this.presentAlertPrompt(week, text = data.header);
            }
            console.log('Confirm Ok');
            

          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

  goTo(team, week){
    this.navCtrl.navigateForward('player/' + team + '/' + week );
  }

  getSelectedPlayer(week){
    this.navCtrl.navigateForward('selectedplayer/' + this.team + '/' + week );
  }

  goBack(){
    console.log('j esssaye');
    this.navCtrl.navigateBack('tabs/tab2');
  }

}

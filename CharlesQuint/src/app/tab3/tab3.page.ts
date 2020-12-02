import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  teams: Observable<any[]>;

  constructor(public alertController: AlertController, public navCtrl: NavController, public firestore : AngularFirestore) {
    this.getInfo(firestore, 'equipes');
  }

  getInfo(firestore, field){
    this.teams = firestore.collection(field).valueChanges();
    console.log(this.teams);

    if(this.teams){
      return true;
    }
    else {
      return false;
    }
  }

  async presentAlertPrompt(text = "Accès restreint") {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: text,
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

              this.addResultPage();
            }
            else{
              data.header = "Mot de passe refusé"
            }
            console.log('Confirm Ok');
            console.log(data.header);
            this.presentAlertPrompt(data.header);

          }
        }
      ]
    });

    await alert.present();
  }

  goTo(team){
    this.navCtrl.navigateForward('display-result/' + team );
  }

  addResultPage(){
    this.navCtrl.navigateForward('add-result');
  }

}

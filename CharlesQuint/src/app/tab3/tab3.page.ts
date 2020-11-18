import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Toast } from '@ionic-native/toast/ngx';

import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  teams: Observable<any[]>;

  constructor(public alertController: AlertController, public navCtrl: NavController, public firestore : AngularFirestore,
              public toast: Toast) {
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

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Accès restreint',
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
              this.toast.show(`Mot de passe incorrect ou l'accès ne vous y est pas autorisé`, '3000', 'center').subscribe(
                toast => {
                  console.log(toast);
                }
              );
            }
            console.log('Confirm Ok');

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

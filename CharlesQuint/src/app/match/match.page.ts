import { Component, OnInit } from '@angular/core';

import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Toast } from '@ionic-native/toast/ngx';

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
              public firestore: AngularFirestore, private activatedRouter: ActivatedRoute,
              public toast: Toast) {

    this.team = this.activatedRouter.snapshot.paramMap.get('team');
    console.log(this.team);

    this.liste = firestore.collection(this.team).valueChanges();
    console.log(this.liste);
  }

  async presentAlertPrompt(week) {
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

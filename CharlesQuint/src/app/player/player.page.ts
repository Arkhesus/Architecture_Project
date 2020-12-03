import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { EmailComposer} from '@ionic-native/email-composer/ngx';
import { stateChanges } from '@angular/fire/database';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

  liste: Observable<any[]>;
  link : Observable<any[]>;
  state:boolean;
  team:string;
  lien:string;
  week:string;
  playerlist: Observable<any[]>;
  nbCheck = 0;
  match:string = "present";
  to:"";

  playerArr = [];
  mailArr = [];;

  constructor(private navCtrl: NavController, public firestore: AngularFirestore, private activatedRouter: ActivatedRoute,
              public alertController: AlertController, public emailComposer: EmailComposer) {
    this.team = this.activatedRouter.snapshot.paramMap.get('team');
    this.week = this.activatedRouter.snapshot.paramMap.get('week');
    console.log(this.team);
   }

  ngOnInit() {

    this.liste = this.firestore.collection('listedeforce').valueChanges();
    console.log(this.liste);

    

  }


  onClick(check){


    const already = this.Check(check);




    this.firestore.collection("calendrier" , ref => ref.where('Semaine', '==', this.week )).snapshotChanges()
    .subscribe(data => {
      data.forEach(childData => {
        // tslint:disable-next-line: no-unused-expression
        this.match = childData.payload.doc.data()[check.Prenom];


      });
    });


    if( already === true ){

    }
    if(already === false) {
      this.checkPresence(check.Prenom);

      this.playerArr.push(check.Prenom);
      console.log(this.playerArr);

    }






 }

 Check(check){
   
  for (var i = 0; i < this.playerArr.length; i++) {
    if(check.Prenom === this.playerArr[i]){
      this.playerArr.splice(i,1);
      console.log(this.playerArr);
      return true;
    }
 }
  return false;
}

  Update(){

    console.log("j'ai appuyé");

    this.firestore.collection('lien', ref => ref.where('Semaine', '==', this.week )).snapshotChanges()
    .subscribe(data => {
      data.forEach(childData => {

        this.lien = childData.payload.doc.data()['key'];
        console.log(this.playerArr.length);

        if(this.playerArr.length === 4)
        {
          this.firestore.collection(this.team).doc(this.lien).update({
            1: this.playerArr[0],
            2: this.playerArr[1],
            3: this.playerArr[2],
            4: this.playerArr[3],
            state : 'Joueurs sélectionnés'
          });

          this.goBack();

          this.playerArr.forEach(element => {
            this.firestore.collection("listedeforce" , ref => ref.where('Prenom', '==', element )).snapshotChanges()
            .subscribe(data => {
              data.forEach(childData => {
                // tslint:disable-next-line: no-unused-expression
                this.to = childData.payload.doc.data()['email'];
      
            

        
        
              });
            });
            
          });

          this.send();
        }
        else{
          this.presentAlert();
        }


      });
    });
    


   }

   async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Nombre de joueurs',
      message: 'Il faut sélectionner 4 joueurs',
      buttons: ['OK']
    });

    await alert.present();
  }

  send(){



    let email = {
      to: "guillaume.caestecker@outlook.be; " + "atadounas@hotmail.be; " + "babadenis7@gmail.com; " + "benoit.vroman@gmail.com; "
      + "cotetdenis@yahoo.com; " + "f.marenne@gmail.com; " + "cesko76@hotmail.com; " + "squasheuro1@yahoo.fr; "
      + "laurentwitmeur@gmail.com; " + "loic.martin@outlook.com; " + "deniscsp@hotmail.com; " + "pil.58@hotmail.com; " 
      + "raymondandriessens@gmail.com; " + "sebastiencoulon@netcourrier.com; " + "tdb_58@yahoo.fr; " 
      + "tristan.cavelier@advalvas.be; " + "yves.levens@skynet.be; ",
      cc : [],
      bcc : [],
      attachement: [],
      subject : "Selection " + this.team+ " - " + this.week,
      body : "Voici le composition de cette semaine : <br>" + this.playerArr[0] + "<br>" + this.playerArr[1] + "<br>" + this.playerArr[2] + "<br>" + this.playerArr[3],
      isHtml: true,
      app : "Outlook",
    };
    this.emailComposer.open(email);

  }



async Alert(player) {

  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Absence',
    message: player + ' ne sera pas présent pour le match',
    buttons: ['OK']
  });

  await alert.present();
}

  goBack(){
    this.navCtrl.navigateBack('match/' + this.team);
  }

  // tslint:disable-next-line: align
  checkPresence(player){



    this.firestore.collection("absences" , ref => ref.where('Semaine', '==', this.week )).snapshotChanges()
  .subscribe(data => {
    data.forEach(childData => {
      // tslint:disable-next-line: no-unused-expression
      let resume = '';
      resume = resume.concat(player,'absent', this.week);
      console.log(resume);
      const doc = childData.payload.doc.data()[resume];


      console.log(doc);
      console.log(doc.length);

      console.log(this.state);
      this.state = true;


      if(doc === 'absent')
      {
        console.log("OKKKKKKKKKKKKK");
        this.Alert(player);
      }

    });
  });



  }




   


}

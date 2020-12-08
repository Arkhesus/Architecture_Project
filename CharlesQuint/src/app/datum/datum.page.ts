import { Component, OnInit,  } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-datum',
  templateUrl: './datum.page.html',
  styleUrls: ['./datum.page.scss'],
})
export class DatumPage implements OnInit {
  liste:Observable<any[]>;
  presence:Observable<any[]>;
  week:string;
  weekArr = [];

  constructor(private navCtrl: NavController, public firestore: AngularFirestore, private activatedRouter: ActivatedRoute) { 
    this.liste = firestore.collection('listedeforce').valueChanges();

    this.week = this.activatedRouter.snapshot.paramMap.get('week');
    




  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  ngOnInit() {
  }


  goBack(){
    this.navCtrl.navigateBack('player-absence/' + this.week);
    return 'player-absence/' + this.week;
  }

  change(value){
    console.log("Tu changes pour la date et tu seras", value);
  }



}

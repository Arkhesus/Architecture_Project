import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  sampleArr = [];
  resultArr = [];

  constructor(public fs: AngularFirestore, private navCtrl: NavController) {

   }

  ngOnInit() {
  }

  search(event){
    let searchKey: string = event.target.value;
    let firstLetter = searchKey.toUpperCase();
    console.log(firstLetter);

    if(searchKey.length == 0){
      this.sampleArr = [];
      this.resultArr = [];
    }

    if (this.sampleArr.length == 0){
      this.fs.collection('club', ref => ref.where('SearchIndex', '==', firstLetter)).snapshotChanges()
      .subscribe(data => {
        data.forEach(childData => {
          this.sampleArr.push(childData.payload.doc.data())
        })
      })
    }
    else{
      this.resultArr = [];
      this.sampleArr.forEach(val => {
        let name: string = val['Name'];
        if (name.toUpperCase().startsWith(searchKey.toUpperCase())){
          if (true){
            this.resultArr.push(val);
          }
        }
      });
    }
  }

  goTo(name){
    console.log(name);
    this.navCtrl.navigateForward('detail-club/' + name);
  }

}

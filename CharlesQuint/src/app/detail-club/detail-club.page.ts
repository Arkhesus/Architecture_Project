import { Component, OnInit, Input, ElementRef, Renderer2, Directive } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { DomController } from '@ionic/angular';


@Component({
  selector: 'app-detail-club',
  templateUrl: './detail-club.page.html',
  styleUrls: ['./detail-club.page.scss'],
})
export class DetailClubPage implements OnInit {

  sampleArr = [];
  resultArr = [];

  local1:string;
  local2:string;

  url1:string;
  url2:string;
  
  display:boolean = false;

  constructor(public fs: AngularFirestore, public afDB: AngularFireDatabase, private activatedRouter: ActivatedRoute,
              private inAppBrowser : InAppBrowser) {


  }

  ngOnInit() {
    console.log('Je m initialise');

    const name: string = this.activatedRouter.snapshot.paramMap.get('name');
    console.log(name);

    this.fs.collection('club', ref => ref.where('Name', '==', name )).snapshotChanges()
      .subscribe(data => {
        data.forEach(childData => {
          console.log('ChildData');
          // tslint:disable-next-line: no-unused-expression
          const club: string = childData.payload.doc.data()['Name'];
          const president: string = childData.payload.doc.data()['President'];
          const secretary: string = childData.payload.doc.data()['Secretaire'];
          this.local1 = childData.payload.doc.data()['Local1'];
          this.local2 = childData.payload.doc.data()['Local2'];
          this.url1 = childData.payload.doc.data()['url1'];
          this.url2 = childData.payload.doc.data()['url2'];

          this.resultArr.push(club);
          this.resultArr.push(president);
          this.resultArr.push(secretary);
          this.resultArr.push(this.local1);
          this.resultArr.push(this.local2);

          console.log(this.resultArr.length);

          console.log(this.resultArr);

          if(this.local2 == "/"){
            this.display = false;
          }
          else{
            this.display = true;
          }
          


        });
      });


      }


      OpenPage(url:string){

        const browser = this.inAppBrowser.create(url, '_self');
        browser.show();
      }


}

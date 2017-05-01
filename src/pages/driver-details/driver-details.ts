import { Component } from '@angular/core';
import { NavController, NavParams , AlertController,LoadingController} from 'ionic-angular';

import {DriverMain} from '../driver-main/driver-main';
import {AngularFire,
        FirebaseListObservable
} from 'angularfire2';
/**
 * Generated class for the DriverDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-driver-details',
  templateUrl: 'driver-details.html',
})
export class DriverDetails {
DriverDetails:  FirebaseListObservable <any>;
FName:any;
LastName:any;
Ads1:string;
Ads2:string;
City:string;
NICNo:string;
AcNo:string;
DOJ:string;
BusNo:string;
Status:string;
Phone:string;
Owner:string;
DOB:string;
email:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController,public loadingCtrl: LoadingController,public angFire: AngularFire) {
 this.DriverDetails=angFire.database.list('/DriverDetails');
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverDetails');
  }
 doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Request to Change the Details?',
      message: 'Do you agree to Change the Details?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.Sent();
            this. DetailsAmdSend();
            this.presentLoading();
            this.doAlert();
            this.nxtPage();
          }
        }
      ]
    });
    confirm.present()
  }

  nxtPage(){
this.navCtrl.push(DriverMain);
}


 DetailsAmdSend() {
 
    this.angFire.database.list('/DriverAmend').push({
      FirstName: this.FName,
      LastName: this.LastName,
      Ads1: this.Ads1,
      Ads2: this.Ads2,
      City: this.City,

      NICNo: this.NICNo,
       AcNo  :this.AcNo,
     DOJ  :this.DOJ,
    BusNo : this.BusNo,
    Status : this.Status,
    Phone  :  this.Phone,
    Owner  : this.Owner,
   DOB  : this.DOB,
    email  : this.email,
    });
    
 }


 doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Alert Message!',
      message: 'Succussfully Submitted for Approval!',
      buttons: ['Ok']
    });
    alert.present();
}

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    
    }).present();
  
}


Sent(){
    console.log(this.FName);
    console.log(this.LastName);
    console.log(this.Ads1);
    console.log(this.Ads2);
    console.log(this.City);

        console.log(this.NICNo);
    console.log(this.AcNo);
    console.log(this.DOJ);
    console.log(this.BusNo);
    console.log(this.Status);
        console.log(this.Phone);
    console.log(this.Owner);
    console.log(this.DOB);
    console.log(this.email);
    
  }

   

}

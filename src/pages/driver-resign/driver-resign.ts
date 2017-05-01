import { Component } from '@angular/core';
import { NavController, NavParams , AlertController} from 'ionic-angular';
import {DriverMain} from '../driver-main/driver-main';
import {AngularFire,
} from 'angularfire2';

/**
 * Generated class for the DriverResign page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-driver-resign',
  templateUrl: 'driver-resign.html',
})

export class DriverResign {

submit : any;
description :any;
Amount :any;
myDate : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController, public angfire : AngularFire) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverResign');
  }

  showAlert(message) {
   
    let alert = this.alerCtrl.create({
      title: 'Error!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }



 doConfirm() {

    if(this.myDate == undefined || this.myDate==''){
          this.showAlert("Date cannot be empty");
       }
    else if (this.submit == undefined || this.submit==''){
      this.showAlert("Reason cannot be empty");

    }  

     else if (this.description == undefined || this.description==''){
      this.showAlert("Description cannot be empty");

    }  
       else{
      

    let confirm = this.alerCtrl.create({
      title: 'Resign from CatchMyBus?',
      message: 'Do you agree to Resign?',
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
            this.ResignSend();
          }
        }
      ]
    });
    confirm.present()
  }

 }

  Sent(){
    console.log(this.myDate);
    console.log(this.submit);
    console.log(this.description);
    console.log(this.Amount);
  }

  ResignSend() {
 
    this.angfire.database.list('/Resign').push({
      Date: this.myDate,
      Submit: this.submit,
      Description: this.description,
     Amount: this.Amount,
    });
    
  }

  openPage(){
this.navCtrl.push(DriverMain);
}
}

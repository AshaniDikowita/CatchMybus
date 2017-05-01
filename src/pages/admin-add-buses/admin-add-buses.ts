import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AdminOwner } from '../admin-owner/admin-owner';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AdminAddBuses page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-admin-add-buses',
  templateUrl: 'admin-add-buses.html',
})
export class AdminAddBuses {
 Bus: FirebaseListObservable<any>;
      busNum : any;
      busBrand: any;
      busmodel: any;
      busModelYear: any;
      busMileage: any;
      busColor: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public angFire: AngularFire,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddBuses');
  }

  openPage(){
  this.navCtrl.push(AdminOwner);
}

// insert bus details
SendDDetails(){
  
 this.angFire.database.list('/Buses').push({
      BusNumber: this.busNum,
      BusBrand: this.busBrand,
      BusModel: this.busmodel,
      BusModelYear: this.busModelYear,
      BusMileage: this.busMileage,
      BusColor: this.busColor,

    })
}
  showConfirm() {
    if(this.busNum == undefined || this.busNum == ''){
      this.showAlert("Bus Number is Empty");
    }
    else if(this.busBrand == undefined || this.busBrand == ''){
      this.showAlert("Bus Brand is Empty");
    }
     else if(this.busmodel == undefined || this.busmodel == ''){
      this.showAlert("Bus Model is Empty");
    }
     else if(this.busModelYear == undefined || this.busModelYear == ''){
      this.showAlert("Bus Model Year is Empty");
    }
     else if(this.busMileage == undefined || this.busMileage == ''){
      this.showAlert("Bus Mileage is Empty");
    }
     else if(this.busColor == undefined || this.busColor == ''){
      this.showAlert("Bus Color is Empty");
    }
    else{
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you agree to add this Details?',
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
            this.SendDDetails()
          }
        }
      ]
    });
    confirm.present();
  }
  }
  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}

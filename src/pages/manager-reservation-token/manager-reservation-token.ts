import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
/*
  Generated class for the ManagerReservationToken page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-manager-reservation-token',
  templateUrl: 'manager-reservation-token.html'
})
export class ManagerReservationTokenPage {
isPushed: boolean = false;
  busNo:any="";
  noOfSeats : any=0;
  totalFee : any=0;
  seats:any;
  date=window.localStorage.getItem('Date');
  BusDetailsResults:FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public angFire:AngularFire) {
    this.busNo = navParams.get("busNo");
    this.noOfSeats = navParams.get("noOfSeats").split(",").length;
    this.totalFee = navParams.get("totalFee");
    this.seats = navParams.get("noOfSeats");
  }

   showAlert(message) {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure you want to confirm the reservation?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {    
          }
        },
        {
          text: 'OK',
          handler: () => {
          this.showSuccessAlert('Reservation was made successfully!');
          this.isPushed = true;
          }
        }
      ]
    });
    confirm.present();
  }
  


  showSuccessAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Reservation was made successfully!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerReservationTokenPage');
     //var date=window.localStorage.getItem('Date');
  }

AddReservationDetails(){
    this.showAlert('Do you want to make the reservation?');
    this.angFire.database.list('/Reservation').push({
      Busno:this.busNo,
      Amount:this.totalFee,
      NoOfseats:this.noOfSeats,
      Date:this.date,
      SeatNo:this.seats,
   });

}
   
}

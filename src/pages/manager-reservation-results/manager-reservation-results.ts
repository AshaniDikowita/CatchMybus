import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManagerViewSeatAllocationPage } from '../manager-view-seat-allocation/manager-view-seat-allocation';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
/**
 * Generated class for the ManagerReservationResults page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-manager-reservation-results',
  templateUrl: 'manager-reservation-results.html',
})
export class ManagerReservationResults {
BusseatDetails:any;
ReservationResults:FirebaseListObservable<any>;
busno=window.localStorage.getItem('Busno');
date=window.localStorage.getItem('Date');
totalseat:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public angfire : AngularFire) {
          this.ReservationResults = angfire.database.list('/Reservation');
          this.ReservationResults.subscribe(BusDetails => {
          BusDetails.forEach(BusDetails=>{ 
            for (var j in BusDetails){
          if(BusDetails.busno=this.busno)
            {
              this.totalseat= parseInt(BusDetails.NoOfseats)+this.totalseat;
            }
          }
    }); });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerReservationResults');
    
  }

  ViewSeatingPlan(){
    this.navCtrl.push(ManagerViewSeatAllocationPage);
  }

}

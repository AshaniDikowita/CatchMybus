import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManagerTwoSeatsPlan } from '../manager-two-seats-plan/manager-two-seats-plan';
import { ModalController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {AngularFire,FirebaseListObservable} from 'angularfire2';

/**
 * Generated class for the ManagerSearchResults page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-manager-search-results',
  templateUrl:'manager-search-results.html',
})
export class ManagerSearchResults {

BusDetailsResults:FirebaseListObservable<any>;
Starttime:any;
searchResults:any;
from:any;
to:any;
time:any;

  rootPage = ManagerSearchResults;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public loadingCtrl: LoadingController,public angfire : AngularFire) {
   
    this.from =window.localStorage.getItem('From');
    this.to= window.localStorage.getItem('To');
    this.time= window.localStorage.getItem('Time');
    this.BusDetailsResults = angfire.database.list('/TimeTable');
    this.BusDetailsResults.subscribe(BusDetails => {
    BusDetails.forEach(BusDetails=>{ 
          console.log('firebase');      
          console.log(BusDetails);   
    }); });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerSearchResults');
      console.log(this.to);
      console.log(this.time);
      console.log(this.from);
       console.log('interface');  
      console.log(this.timeToMins(this.time));
      
    
  }


DirectToSeatingPlan(Busno,Starttime,Amount,key,sheetDetails,sheetFee){
    window.localStorage.setItem('Amount',Amount);
    window.localStorage.setItem('Starttime',Starttime);
    this.navCtrl.push(ManagerTwoSeatsPlan,{ key : key ,sheetDetails : sheetDetails, sheetFee : sheetFee, busNo : Busno});
    console.log('#############');
    console.log(Amount);
    console.log(Starttime);
    console.log('#############');
   
}

calculateTime(){
   // var time=window.localStorage.getItem('Starttime');
    //retreive time from firebase and subtract tyhe value and return that value should be displayed in span
  
}  

timeToMins(time) {
  var b = time.split(':');
  return (+b[0])*60*60 + (+b[1])*60;
} 

}


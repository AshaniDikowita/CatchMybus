import { Component } from '@angular/core';
import { NavController, NavParams , Events} from 'ionic-angular';
import { ManagerReservationTokenPage } from '../manager-reservation-token/manager-reservation-token';
import { ToastController } from 'ionic-angular';
import { ManagerSnapShotsofbusesPage } from '../manager-snap-shotsofbuses/manager-snap-shotsofbuses';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ManagerTwoSeatsPlan page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-manager-two-seats-plan',
  templateUrl: 'manager-two-seats-plan.html',
})
export class ManagerTwoSeatsPlan {


  items;
  selectedSheetCount : any;
  sheetDetails: any;
  events : Events;
  sheetFee : any ;
  totalFee : any ;
  busNo : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, events : Events,public alertCtrl: AlertController) {
    //this.items = [[{sheetId : 'S001', sheetStatus : false},{sheetId : 'S002', sheetStatus : false},{sheetId : 'S003', sheetStatus : false},{sheetId : 'S004', sheetStatus : false}],[{sheetId : 'S001', sheetStatus : false},{sheetId : 'S002', sheetStatus : false},{sheetId : 'S003', sheetStatus : false},{sheetId : 'S004', sheetStatus : false}]];
    this.sheetDetails = navParams.get("sheetDetails");
    this.sheetFee = navParams.get("sheetFee");
    this.busNo = navParams.get("busNo");
    this.items = [];
    for (var k in this.sheetDetails){
      var row = [];
      for (var j in this.sheetDetails[k]){
        row.push(this.sheetDetails[k][j]);
      }
      this.items.push(row);
    }
    this.events = events;

 console.log("Loaded")


    events.subscribe('count:changed', count => {
      if(count !== undefined && count !== ""){
        this.selectedSheetCount = count;
        this.totalFee = parseInt(count.split(",").length) * parseFloat(this.sheetFee);
      }
      
   })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerTwoSeatsPlan');
  }
  updateCount(){
    alert("ddd");
  }



  ReviewPage() {
    this.navCtrl.push(ManagerSnapShotsofbusesPage);
  }

  DirectToTokenPage() {
    this.navCtrl.push(ManagerReservationTokenPage, { busNo : this.busNo, noOfSeats : this.selectedSheetCount, totalFee : this.totalFee});
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
/**
 * Generated class for the AdminBusMain page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-admin-bus-main',
  templateUrl: 'admin-bus-main.html',
})
export class AdminBusMain {
 busNum: any;
  lastServiceDate: any;
  licenseExDate: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public angFire: AngularFire) {
  }

 AddBusMaintenanceDetails(){
    this.angFire.database.list('/BusMaintenance').push({
      BusNumber: this.busNum,
      LastServiceDate: this.lastServiceDate,
      LicenseExpireDate: this.licenseExDate,

    });
  }
}

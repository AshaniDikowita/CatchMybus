import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire,
        FirebaseListObservable
} from 'angularfire2';
/**
 * Generated class for the DriverMain page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-driver-main',
  templateUrl: 'driver-main.html',
})
export class DriverMain {
today
DriverDetails:  FirebaseListObservable <any>;
FirstName:any;
LastName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,angFire: AngularFire) {
this.DriverDetails=angFire.database.list('/DriverDetails');
    
     this.today = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverMain');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/**
 * Generated class for the PassengerTimeTable page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-passenger-time-table',
  templateUrl: 'passenger-time-table.html',
})
export class PassengerTimeTable {
timetable: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,angFire: AngularFire) {

    this.timetable = angFire.database.list('/TimeTable');
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad PassengerTimeTable');
  }*/

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManagerThreeSeatsPlan page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-manager-three-seats-plan',
  templateUrl: 'manager-three-seats-plan.html',
})
export class ManagerThreeSeatsPlan {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerThreeSeatsPlan');
  }

   goBack() {
   this.navCtrl.pop();
  }

  ChangeColor(){
    console.log('you clicked on seat  ManagerSeatingPlanView');
  }

}

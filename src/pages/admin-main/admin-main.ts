import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminMain page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
class MyApp {
  // First page to push onto the stack
  rootPage = AdminMain;
}

@Component({
  selector: 'page-admin-main',
  templateUrl: 'admin-main.html',
})
export class AdminMain {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminMain');
  }

}

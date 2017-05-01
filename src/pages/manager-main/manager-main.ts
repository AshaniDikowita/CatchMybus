import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Login } from '../login/login';

/**
 * Generated class for the ManagerMain page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-manager-main',
  templateUrl: 'manager-main.html',
})
export class ManagerMain {

  constructor(public navCtrl: NavController, public navParams: NavParams,private menuCtrl: MenuController) {
        if(!this.isLoggedIn()){
           console.log('You are not logged in');
            this.navCtrl.push(Login);    
	    }
      else{
        this.menuCtrl.enable(true);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerMain');
  }

    isLoggedIn(){
	      if(window.localStorage.getItem('currentuser')){
	      return true;
	}
}

}

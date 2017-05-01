import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {AngularFire} from 'angularfire2';
import { Login } from '../login/login';

/**
 * Generated class for the SignUp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUp {
  segment: string;
  fName: string;
  lName: string;
  round: boolean;
  expand: boolean;
  showSpinner: boolean;
  spinnerColor: string;
  loader: any;  
  user = {email:'' , password: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams,public angfire: AngularFire, private loadingCtrl: LoadingController,private alertCtrl: AlertController) {
    this.segment = "signIn";
    this.showSpinner = false;
    this.spinnerColor = 'light';
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUp');
  }

registerUser() {
    this.showLoading()
    this.angfire.auth.createUser(this.user).then((authData) => {
      setTimeout(() => {
        this.loader.dismiss();
      });
      let prompt = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'New Account created!',
        buttons: ['OK']
      });
      prompt.present();
      this.navCtrl.push(Login);
    }).catch((error) => {
      this.showError(error.message);
    });
  }

    showLoading() {
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loader.present();
  }
    showError(text) {
    setTimeout(() => {
      this.loader.dismiss();
    });
 
    let prompt = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    prompt.present();
  }

}

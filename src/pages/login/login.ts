import { Component } from '@angular/core';
import { NavController, NavParams,Platform,MenuController } from 'ionic-angular';
import { AuthProviders,AuthMethods, AngularFire} from 'angularfire2';
import { AlertController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { LoadingController } from 'ionic-angular';
import { SignUp } from '../sign-up/sign-up';
//import {Facebook} from 'ionic-native';
//import firebase from 'firebase';
//import {Facebook} from 'ionic-native';
//import firebase from 'firebase';
//import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
email : any;
password : any;
loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public angfire:AngularFire,public platform:Platform,private menuCtrl: MenuController,public alertCtrl: AlertController,private loadingCtrl: LoadingController) {
    this.menuCtrl.enable(false);
  }

    showLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration:100

    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Login Error!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
login(){
   this.showLoading();
       if(this.email == undefined || this.email==''){
          this.showAlert("Email cannot be empty");
       }
       else if(this.password =='' || this.password == undefined){
          this.showAlert("Password cannot be empty");
       }
       else{
  this.angfire.auth.login({
  email:this.email,
  password:this.password
},
  {
    provider:AuthProviders.Password,
    method: AuthMethods.Password
    }).then((response) =>{
      console.log('Login Successfully' + JSON.stringify(response));
      let currentuser ={
        email:response.auth.email,
        picture: response.auth.photoURL
      };
      window.localStorage.setItem('uid',response.auth.uid);
      window.localStorage.setItem('name',response.auth.email);
      window.localStorage.setItem('photo',response.auth.photoURL);
      window.localStorage.setItem('currentuser',JSON.stringify(currentuser));
   this.navCtrl.push(MyApp);
  }).catch((error)=>{
     console.log(error);
     this.showAlert(error);
   })
}
}

/*fblogin() {

    if (this.platform.is('cordova')) {
      Facebook.login(['email', 'public_profile']).then((res) => {
        const facebookCreds = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCreds).then((res) => {
          let currentuser = firebase.auth().currentUser;
          window.localStorage.setItem('currentuser', JSON.stringify(currentuser.displayName));
          alert(currentuser.displayName);
          this.navCtrl.pop();
        }, (err) => {
          alert('Login not successful' + err);
        })
      })
    }
    else {
      this.angfire.auth.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup
      }).then((response) => {
        console.log('Login success with Facebook' + JSON.stringify(response));
        let currentuser = {
          email: response.auth.displayName,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        this.navCtrl.pop();
      }).catch((error) => {
        console.log(error);
      })
    
    }
  }*/

  SignUp(){
     this.navCtrl.push(SignUp);
  }

}
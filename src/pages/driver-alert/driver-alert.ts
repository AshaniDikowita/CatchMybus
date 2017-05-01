import { Component } from '@angular/core';
import {DriverMain} from '../driver-main/driver-main';
import {NavController, NavParams ,LoadingController, AlertController} from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';
import {AngularFire,
} from 'angularfire2';

/**
 * Generated class for the DriverAlert page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-driver-alert',
  templateUrl: 'driver-alert.html',
})
export class DriverAlert {
 langs;
langForm;
location:string;
loader: any; 
no:string;

submit : any;

choice :any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public alerCtrl: AlertController, public angfire : AngularFire) {
      this.langForm = new FormGroup({
"langs": new FormControl({value: 'no', disabled: false})
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverAlert');
  }

 mainPage(){
this.navCtrl.push(DriverMain);
}







    showAlert(message) {
   
    let alert = this.alerCtrl.create({
      title: 'Error!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
 doConfirm() {

   if(this.location == undefined || this.location==''){
          this.showAlert("Location cannot be empty");
       }
       else if (this.submit == undefined || this.submit==''){
      this.showAlert("Reason cannot be empty");

    } 
    else if (this.choice == undefined || this.choice==''){
      this.showAlert("Choice cannot be empty");

    }  
       else{
      







    let confirm = this.alerCtrl.create({
      title: 'Request to Change the Details?',
      message: 'Do you agree to Change the Details?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.presentLoading();
            this.doAlert();
            this.Consol();
            this. AlertSend() ;
            
          }
        }
      ]
    });
    confirm.present()
  }


 } 


  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    
    }).present();
  
}


doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
    
}

 doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Alert Message!',
      message: 'Succussfully Submitted!',
      buttons: ['Ok']
    });
    alert.present()
}

Consol(){
    console.log(this.location);
    console.log(this.submit);
    console.log(this.choice);
  }
 AlertSend() {
this.angfire.database.list('/DriverAlert').push({
      Location: this.location,
      Reason: this.submit,
      AltRoot: this.choice,
     
    });
    
  }


}

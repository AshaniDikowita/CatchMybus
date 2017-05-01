import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManagerSearchResults } from '../manager-search-results/manager-search-results';
import { ModalController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



/**
 * Generated class for the ManagerAddReservations page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-manager-add-reservations',
  templateUrl: 'manager-add-reservations.html',
})
export class ManagerAddReservations {
 
  from:any;
  to:any;
  transferDate : string;
  timeStarts: string;
  loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public loadingCtrl: LoadingController,public alertCtrl: AlertController) {

}


 presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      //duration: 100
    });
    this.loader.present();
  }

  AddBookingDetails() {
     this.presentLoading();
    if((this.from==undefined) || (this.to==undefined) || (this.timeStarts==undefined))
    {
      setTimeout(()=>{
          this.loader.dismiss();
      });
      let confirm = this.alertCtrl.create({
      title: 'Error!',
      message: 'Some Fields are empty!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
          }
        }
      ]
    });
     
    confirm.present();
  }
    else if(this.from==this.to)
    {
      setTimeout(()=>{
          this.loader.dismiss();
      });
      let confirm = this.alertCtrl.create({
      title: 'Error!',
      message: 'From and To cannot have the same locations!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
          }
        }
      ]
    });
     
    confirm.present();
      
    }
     else
     {
     
      window.localStorage.setItem('From',this.from);
      window.localStorage.setItem('To',this.to);
      window.localStorage.setItem('Date',this.transferDate);
      window.localStorage.setItem('Time',this.timeStarts);
      console.log(this.from);
      console.log(this.to);
      console.log(this.transferDate);
      console.log(this.timeStarts);

      setTimeout(()=>{
          this.loader.dismiss();
      });

      this.navCtrl.push(ManagerSearchResults);
   } 
  }

  todayDate(datetoDay :string) :void{
    let utc = new Date().toJSON().slice(0,10);
  if (datetoDay === undefined ){
      this.transferDate = utc;
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerAddReservations');
    this.todayDate(this.transferDate);
  

    
  }
 
}

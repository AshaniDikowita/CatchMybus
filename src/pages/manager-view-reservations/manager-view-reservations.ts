import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { ManagerReservationResults } from '../manager-reservation-results/manager-reservation-results';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ManagerViewReservations page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-manager-view-reservations',
  templateUrl: 'manager-view-reservations.html',
})
export class ManagerViewReservations {
   searchQuery: string = '';
   items: string[];
   BusRef: any;
   BusList: any;
   BusLoadedList: any;

   transferDate : string;
   loader:any;
   BusNo: any;


  constructor(public navCtrl: NavController,public navParams: NavParams,public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
     


  }

 presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

 DirectToReservationResults(){
   console.log(this.BusNo); 
   this.presentLoading();
    if((this.BusNo==undefined))
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
              console.log('OK clicked');
              }
            }
          ]
        });
        
        confirm.present();
      }
      else{
         setTimeout(()=>{
              this.loader.dismiss();
          });
        window.localStorage.setItem('Busno',this.BusNo);
        window.localStorage.setItem('Date',this.transferDate);
        this.navCtrl.push(ManagerReservationResults);
      } 
}

  todayDate(datetoDay :string) :void{
    let utc = new Date().toJSON().slice(0,10);
  if (datetoDay === undefined ){
      this.transferDate = utc;
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerViewReservations');
    this.todayDate(this.transferDate);
  }

}

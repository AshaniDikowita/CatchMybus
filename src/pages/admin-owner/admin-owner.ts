import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
/**
 * Generated class for the AdminOwner page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-admin-owner',
  templateUrl: 'admin-owner.html',
})
export class AdminOwner {

  busNum: any;
  OName: any;
  OAdd: any;
  OTel: any;
  ONIC: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public angFire: AngularFire) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminOwner');
  }

  AddOwnerDetails(){
    this.angFire.database.list('/owner').push({
      BusNumber: this.busNum,
      OwnerName: this.OName,
      OwnerAddress: this.OAdd,
      OwnerTel: this.OTel,
      OwnerNIC: this.ONIC,

    });
  }
  

  

  }


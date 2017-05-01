import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { Login } from '../login/login';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  today
  DriverDetails:  FirebaseListObservable <any>;
  FirstName:any;
  LastName:any;
  constructor(public navCtrl: NavController,private menuCtrl: MenuController,angFire: AngularFire) {
      this.DriverDetails=angFire.database.list('/DriverDetails');
    
     this.today = new Date().toISOString();
       if(!this.isLoggedIn()){
           console.log('You are not logged in');
            this.navCtrl.push(Login);    
	    }
      else{
          var name=window.localStorage.getItem('name');
    if (name=="adickowita@gmail.com"){
    this.user = 'c';

  }
  
   if (name=="prasanganidharmasiri@gmail.com"){
    this.user = 'd';

  }
  
  if (name=="chathurangarulz@gmail.com"){
    this.user = 'e';
   
  }
  
  if (name=="bdias.pa@gmail.com"){
    this.user = 'f';

  } 
  
        this.menuCtrl.enable(true);
      }
  }
  isLoggedIn(){
	      if(window.localStorage.getItem('currentuser')){
	      return true;
	}


}
}

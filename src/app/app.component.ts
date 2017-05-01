import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
//import manager pages
import { ManagerAddReservations } from '../pages/manager-add-reservations/manager-add-reservations';
import { ManagerViewReservations } from '../pages/manager-view-reservations/manager-view-reservations';
import { ManagerThreeSeatsPlan } from '../pages/manager-three-seats-plan/manager-three-seats-plan';
//import Passenger pages
import { PassengerNearestBusStop } from '../pages/passenger-nearest-bus-stop/passenger-nearest-bus-stop';
import { PassengerSearchBus } from '../pages/passenger-search-bus/passenger-search-bus';
import { PassengerTimeTable } from '../pages/passenger-time-table/passenger-time-table';
import { PassengerViewBusDetails } from '../pages/passenger-view-bus-details/passenger-view-bus-details';
import { PassengerMain } from '../pages/passenger-main/passenger-main';
import { ManagerMain } from '../pages/manager-main/manager-main';
//import admin pages
import { AdminAddAlerts } from '../pages/admin-add-alerts/admin-add-alerts';
import { AdminAlerts } from '../pages/admin-alerts/admin-alerts';
import { AdminBusMain } from '../pages/admin-bus-main/admin-bus-main';
import { AdminOwner } from '../pages/admin-owner/admin-owner';
import { AdminSystemUsers } from '../pages/admin-system-users/admin-system-users';
import { AdminUsers } from '../pages/admin-users/admin-users';
import { AdminNewRoutes } from '../pages/admin-new-routes/admin-new-routes';
import { AdminAddBuses } from '../pages/admin-add-buses/admin-add-buses';
import { AdminMain } from '../pages/admin-main/admin-main';
//import driver pages
import { DriverAlert } from '../pages/driver-alert/driver-alert';
import { DriverEmergency } from '../pages/driver-emergency/driver-emergency';
import { DriverMain } from '../pages/driver-main/driver-main';
import { DriverRoute } from '../pages/driver-route/driver-route';
import { DriverDetails} from '../pages/driver-details/driver-details';
import { DriverResign } from '../pages/driver-resign/driver-resign';
//Login Page
import { AboutUs } from '../pages/about-us/about-us';
import { SignUp } from '../pages/sign-up/sign-up';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  user: any;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Add Reservations', component: ManagerAddReservations },
      { title: 'View Reservations', component: ManagerViewReservations },
      { title: 'Nearest Bus Stop', component: PassengerNearestBusStop },
      { title: 'Search Bus', component: PassengerSearchBus },
      { title: 'Bus schedule', component: PassengerTimeTable },
      { title: 'View Bus Details', component: PassengerViewBusDetails },
      { title: 'Add Alerts', component: AdminAddAlerts },
      { title: 'Alerts', component: AdminAlerts },
      { title: 'Bus Maintenance', component: AdminBusMain },
      { title: 'Bus Owners', component: AdminOwner },
      { title: 'SystemUsers', component: AdminSystemUsers },
      { title: 'Users', component: AdminUsers },
      { title: 'DriverAlert', component: DriverAlert },
      { title: 'DriverEmergency', component: DriverEmergency },
      { title: 'Home', component: DriverMain },
      { title: 'DriverRoute', component: DriverRoute }, 
      { title: 'Driver Details', component: DriverDetails },
      { title: 'DriverResign', component: DriverResign },  
      { title: 'ThreeSeatsPlan', component: ManagerThreeSeatsPlan }, 
      { title: 'About Us', component: AboutUs },  
      { title: 'Sign Up', component: SignUp },
      { title: 'Home', component: PassengerMain }, 
      { title: 'New Routes', component: AdminNewRoutes },
      { title: 'Add Buses', component: AdminAddBuses },
      { title: 'Home', component: AdminMain},
      { title: 'Home', component:  ManagerMain},  
     
    ];

  }

  initializeApp() {
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
  
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


logout(){
    let confirm = this.alertCtrl.create({
      title: 'Log Out?',
      message: 'Are you sure you want to Log out?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
          console.log('OK clicked');
          window.localStorage.removeItem('currentuser');
          window.location.reload();
          }
        }
      ]
    });
    confirm.present();
  }
}

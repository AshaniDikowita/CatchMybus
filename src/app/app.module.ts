import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { Geolocation } from '@ionic-native/geolocation';
//import firebase from 'firebase';
import { DatePickerModule } from 'datepicker-ionic2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import manager pages
import { ManagerAddReservations } from '../pages/manager-add-reservations/manager-add-reservations';
import { ManagerViewReservations } from '../pages/manager-view-reservations/manager-view-reservations';
import { ManagerSearchResults } from '../pages/manager-search-results/manager-search-results';
import { ManagerTwoSeatsPlan } from '../pages/manager-two-seats-plan/manager-two-seats-plan';
import { ManagerThreeSeatsPlan } from '../pages/manager-three-seats-plan/manager-three-seats-plan';
import { ManagerReservationResults } from '../pages/manager-reservation-results/manager-reservation-results';
import { ManagerReservationTokenPage } from '../pages/manager-reservation-token/manager-reservation-token';
import { ManagerViewSeatAllocationPage } from '../pages/manager-view-seat-allocation/manager-view-seat-allocation';
import { ManagerSnapShotsofbusesPage } from '../pages/manager-snap-shotsofbuses/manager-snap-shotsofbuses';
import { ManagerMain } from '../pages/manager-main/manager-main';
//import Passenger pages
import { PassengerNearestBusStop } from '../pages/passenger-nearest-bus-stop/passenger-nearest-bus-stop';
import { PassengerSearchBus } from '../pages/passenger-search-bus/passenger-search-bus';
import { PassengerTimeTable } from '../pages/passenger-time-table/passenger-time-table';
import { PassengerViewBusDetails } from '../pages/passenger-view-bus-details/passenger-view-bus-details';
import { PassengerMain } from '../pages/passenger-main/passenger-main';
//import admin pages
import { AdminAddAlerts } from '../pages/admin-add-alerts/admin-add-alerts';
import { AdminAlerts } from '../pages/admin-alerts/admin-alerts';
import { AdminBusMain } from '../pages/admin-bus-main/admin-bus-main';
import { AdminMain } from '../pages/admin-main/admin-main';
import { AdminOwner } from '../pages/admin-owner/admin-owner';
import { AdminSystemUsers } from '../pages/admin-system-users/admin-system-users';
import { AdminUsers } from '../pages/admin-users/admin-users';
import { AdminNewRoutes } from '../pages/admin-new-routes/admin-new-routes';
import { AdminAddBuses } from '../pages/admin-add-buses/admin-add-buses';
//import driver pages
import { DriverAlert } from '../pages/driver-alert/driver-alert';
import { DriverEmergency } from '../pages/driver-emergency/driver-emergency';
import { DriverMain } from '../pages/driver-main/driver-main';
import { DriverRoute } from '../pages/driver-route/driver-route';
import { DriverDetails} from '../pages/driver-details/driver-details';
import { DriverResign } from '../pages/driver-resign/driver-resign';
//Login Page
import { Login } from '../pages/login/login';
import { SignUp } from '../pages/sign-up/sign-up';
import { AboutUs } from '../pages/about-us/about-us';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SeatComponent } from "../components/seat-component/seat-component";
export const firebaseConfig={
    apiKey: "AIzaSyDwr8Wx8KdIU1t76FqjOr_Lq4_zMt3FN4s",
    authDomain: "catchmybus-83eaf.firebaseapp.com",
    databaseURL: "https://catchmybus-83eaf.firebaseio.com",
    projectId: "catchmybus-83eaf",
    storageBucket: "catchmybus-83eaf.appspot.com",
    messagingSenderId: "1062827571068"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ManagerAddReservations,
    ManagerViewReservations,
    ManagerSearchResults,
    ManagerTwoSeatsPlan,
    ManagerThreeSeatsPlan,
    ManagerReservationResults,
    ManagerReservationTokenPage , 
    ManagerViewSeatAllocationPage,
    ManagerSnapShotsofbusesPage,
    PassengerNearestBusStop,
    PassengerSearchBus,
    PassengerTimeTable,
    PassengerViewBusDetails,
    AdminAddAlerts,
    AdminAlerts,
    AdminBusMain,
    AdminOwner,
    AdminSystemUsers,
    AdminUsers,
    DriverAlert,
    DriverEmergency,
    DriverMain,
    DriverRoute,
    Login,
    SignUp,
    AboutUs,
    DriverDetails,
    DriverResign,
    SeatComponent,
    PassengerMain,
    AdminNewRoutes,
    AdminAddBuses, 
    AdminMain,
    ManagerMain,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    DatePickerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ManagerAddReservations,
    ManagerViewReservations,
    ManagerSearchResults,
    ManagerTwoSeatsPlan,
    ManagerThreeSeatsPlan,
    ManagerReservationResults,
    ManagerReservationTokenPage ,  
    ManagerViewSeatAllocationPage,
    ManagerSnapShotsofbusesPage,
    PassengerNearestBusStop,
    PassengerSearchBus,
    PassengerTimeTable,
    PassengerViewBusDetails,
    AdminAddAlerts,
    AdminAlerts,
    AdminBusMain,
    AdminOwner,
    AdminSystemUsers,
    AdminUsers,
    DriverAlert,
    DriverEmergency,
    DriverMain,
    DriverRoute,
    Login,
    SignUp,
    AboutUs, 
    DriverDetails,
    DriverResign,
    SeatComponent,
    PassengerMain,
    AdminNewRoutes,
    AdminAddBuses,
    AdminMain,
    ManagerMain,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

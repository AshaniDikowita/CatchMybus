import { Component,ViewChild } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminNewRoutes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google;
//@IonicPage()
@Component({
  selector: 'page-admin-new-routes',
  templateUrl: 'admin-new-routes.html',
})
export class AdminNewRoutes {
 @ViewChild('map') map;
  selectedItem: any;
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();
  constructor(public navCtrl: NavController, public navParams: NavParams) {

   
  }

 ionViewDidLoad() {
    console.log("Loading map...");
    this.loadmap();
  }
  loadmap(){
     let mapc = this.map.nativeElement;
     let mapoptions3 = new google.maps.Map(mapc, {
          center: { lat: 6.933239, lng: 79.877283 },
          zoom: 11
        }); 
         this.calcRoute(mapoptions3,this.directionsService,this.directionsDisplay);
  }
        calcRoute(map,directionsService,directionsDisplay) {
        var start = new google.maps.LatLng(6.7202, 79.9305);
        var end = new google.maps.LatLng(7.2906, 80.6337);
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(start);
        bounds.extend(end);
        map.fitBounds(bounds);
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map);
            } else {
                alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
            }
        });
    }

}
 

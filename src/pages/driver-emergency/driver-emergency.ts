import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

declare var google;
/**
 * Generated class for the DriverEmergency page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-driver-emergency',
  templateUrl: 'driver-emergency.html',
})
export class DriverEmergency {
@ViewChild('map') mapElement: ElementRef;
  map: any;
  showed = false;
  busstops: FirebaseListObservable<any>;
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();

  constructor(public navCtrl: NavController, public geolocation: Geolocation,public angFire:AngularFire,public alerCtrl: AlertController) {
    this.busstops = angFire.database.list("/busstop");
  }

  ionViewDidLoad() {
    console.log("Loading map...");
    this.showCurrentLocation();
    
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      console.log("loc " + latLng);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
      let content = "<h4>My Location</h4>";

      this.addInfoWindow(marker, content);

    }, (err) => {
      console.log("load map :" + err);
    });


  }


  addMarker(latLang, content) {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLang
    });

    this.addInfoWindow(marker, content);
   
  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: "<h4>" + content + "</h4>"
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  showCurrentLocation() {
    //if (!this.showed) {
   /* var mapOptions5;
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
       mapOptions5
       = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions5);

      let content = "My Location";
      this.addMarker(latLng, content);
    }, (err) => {
      console.log("load map :" + err);
    });
    this.showed = true; */
    //}
        let mapc = this.mapElement.nativeElement;
          let mapoptions3 = new google.maps.Map(mapc, {
          center: { lat: 6.933239, lng: 79.877283 },
          zoom: 11
          }); 
    this.calcRoute(mapoptions3,this.directionsService,this.directionsDisplay);
  }

  getCurrentPositionLatLang() {
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      return latLng;
    }, (err) => {
      console.log("load map :" + err);
    });
  }

  showBusStops() {
    // let mapOptions1 = {
    //     center: this.getCurrentPositionLatLang(),
    //     zoom: 15,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    // }




    this.busstops.subscribe(busstops => {
      busstops.forEach(
        marker => {
          var position = new google.maps.LatLng(marker.lat, marker.lng);
          console.log("POSI : " + position);
          this.addMarker(position, marker.name);
          // var Mark = new google.maps.Marker({ position: position, title: marker.name });
          // Mark.setMap(this.map);

          // google.maps.event.addListener(Mark, 'click', () => {
          //   //this.navCtrl.push(HelloIonicPage);
          //   console.log(position);
          //    //this.calcRoute(mapoptions3,this.directionsService,this.directionsDisplay);
          // });
        })
    });
  }
    doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Emergency Alert!',
      message: 'You Have Succuessfully Submitted your Loation to next available Bus!',
      buttons: ['Ok']
    });
    alert.present()
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




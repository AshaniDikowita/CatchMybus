import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/**
 * Generated class for the PassengerNearestBusStop page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()

declare var google;

@Component({
  selector: 'page-passenger-nearest-bus-stop',
  templateUrl: 'passenger-nearest-bus-stop.html',
})
export class PassengerNearestBusStop {

 @ViewChild('map') mapElement: ElementRef;
  map: any;
  showed = false;
  busstops: FirebaseListObservable<any>;

  constructor(public navCtrl:NavController, public navParams: NavParams, public geolocation: Geolocation,public angFire:AngularFire) {
    this.busstops=angFire.database.list('/busstop');
    console.log(this.busstops);
}

 ionViewDidLoad() {
    console.log("Loading map...");
    this.loadMap();
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
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let content = "My Location";
      this.addMarker(latLng, content);
    }, (err) => {
      console.log("load map :" + err);
    });
    this.showed = true;
    //}
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
}

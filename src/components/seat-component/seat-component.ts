import { Component, Input } from '@angular/core';
import { AlertController, Events } from 'ionic-angular';
/*
  Generated class for the SeatComponent component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'seat-component',
  templateUrl: 'seat-component.html'
})
export class SeatComponent {

  text: string;
  @Input() items;
  @Input() selectedCount;
  events: Events;
  constructor(public alertCtrl: AlertController, events: Events) {
    this.events = events;
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  ChangeColor(obj, items) {
    var selectedCount = 0;
    items.forEach(list => {
      list.forEach(element => {
        if (element.sheetStatus == true) {
          selectedCount++;
        }
      });
    });
    if (selectedCount == 5 && obj.sheetStatus == false) {
      this.showAlert("Cannot Select More Than Five seats!")
    }
    else {
      obj.sheetStatus = !obj.sheetStatus;
      this.selectedCount = selectedCount;
      var selectedSheets = [];
      items.forEach(list => {
        list.forEach(element => {
          if (element.sheetStatus == true) {
            selectedSheets.push(element.sheetId);
          }
        });
      });
      this.events.publish('count:changed', selectedSheets.join());
    }

    //window.document.getElementById(id).style.border = "thick solid #0000FF";
    // window.localStorage.setItem('id',id);
    // console.log('you clicked on seat  ManagerSeatingPlanView');
    // console.log(id);

    //create a new page on click and then send the values
    // var amount=window.localStorage.getItem('Amount');



  }

}

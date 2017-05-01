import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
/*
  Generated class for the ManagerViewSeatAllocation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-manager-view-seat-allocation',
  templateUrl: 'manager-view-seat-allocation.html'
})
export class ManagerViewSeatAllocationPage {
BookedResults:FirebaseListObservable<any>;
items;
seatitems;
newitems;
  constructor(public navCtrl: NavController, public navParams: NavParams,public angFire:AngularFire,) {
          this.BookedResults = angFire.database.list('/Reservation');
          this.BookedResults.subscribe(BusDetails => {
          BusDetails.forEach(BusDetails=>{ 
              this.seatitems = [];
                 for(var k in BusDetails){
                  this.seatitems.push(BusDetails.SeatNo.split(",")[k]);
                  console.log(BusDetails.SeatNo.split(",")[k]);
             }   
            
    }); });

    console.log(this.seatitems);
    console.log('####')

      for (var k in this.seatitems){
      if(this.seatitems[k] !== undefined){
            this.newitems.push(this.seatitems[k]);

      }
    }  

      console.log('sfsfs');
       console.log(this.newitems);

        this.items = [[
  {sheetId : 'A001', sheatStatus : false, hideStatus : false},{sheetId : 'A002', sheetStatus : false,hideStatus : false},{sheetId : 'A003', sheetStatus : false,hideStatus : false},{sheetId : 'A004', sheetStatus : false,hideStatus : false}]
,[{sheetId : 'B001', sheetStatus : false,hideStatus : false},{sheetId : 'B002', sheetStatus : false,hideStatus : false},{sheetId : 'B003', sheetStatus : false,hideStatus : false},{sheetId : 'B004', sheetStatus : false,hideStatus : false}]
,[{sheetId : 'C001', sheetStatus : false,hideStatus : false},{sheetId : 'C002', sheetStatus : false,hideStatus : false},{sheetId : 'C003', sheetStatus : false,hideStatus : false},{sheetId : 'C004', sheetStatus : false,hideStatus : false}]
,[{sheetId : 'D001', sheetStatus : false,hideStatus : false},{sheetId : 'D002', sheetStatus : false,hideStatus : false},{sheetId : 'D003', sheetStatus : false,hideStatus : false},{sheetId : 'D004', sheetStatus : false,hideStatus : false}]
,[{sheetId : 'E001', sheetStatus : false,hideStatus : false},{sheetId : 'E002', sheetStatus : false,hideStatus : false},{sheetId : 'E003', sheetStatus : false,hideStatus : false},{sheetId : 'E004', sheetStatus : false,hideStatus : false}]
,[{sheetId : 'F001', sheetStatus : false,hideStatus : false},{sheetId : 'F002', sheetStatus : false,hideStatus : false},{sheetId : 'F003', sheetStatus : false,hideStatus : false},{sheetId : 'F004', sheetStatus : false,hideStatus : false}]
,[{sheetId : 'G001', sheetStatus : false},{sheetId : 'G002', sheetStatus : false},{sheetId : 'G003', sheetStatus : false,hideStatus : false},{sheetId : 'G004', sheetStatus : false,hideStatus : false}]
,[{sheetId : 'F001', sheetStatus : false,hideStatus : false},{sheetId : 'F002', sheetStatus : false,hideStatus : false},{sheetId : 'F003', sheetStatus : false,hideStatus : false},{sheetId : 'F004', sheetStatus : false,hideStatus : false},{sheetId : 'F005', sheetStatus : false,hideStatus : false } , {sheetId : 'F006', sheetStatus : false,hideStatus : false}]
    ];
       
  /*for (var k in this.items.length){
      console.log(this.items.length)
      for (var j in this.seatitems.length){
        if(this.seatitems[k]!=undefined){
        if(this.items.sheetId[k]==this.seatitems[k]){
            this.items[k].sheetStatus==true;
            console.log(this.items[k].sheetStatus);
        }
      }
      }
    
  }*/

 console.log("Loaded")

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerViewSeatAllocationPage');
  }

   
  ChangeColor(){
    console.log('you clicked on the seat');
 
  }
  

}

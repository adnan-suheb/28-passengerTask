import { Component, OnInit } from '@angular/core';
import { passengerArr } from '../../const/passenger';
import { Ipassenger } from '../../interface/passenger.interface';

@Component({
  selector: 'app-passenger-dash',
  templateUrl: './passenger-dash.component.html',
  styleUrls: ['./passenger-dash.component.scss']
})
export class PassengerDashComponent implements OnInit {


  passengerData: Array<Ipassenger> = passengerArr

  // checkedInArr:Array<Ipassenger>=this.passengerData.filter(obj=>obj.checkInStatus===true)
  checkedInArr!: Array<Ipassenger>

  constructor() { }

  ngOnInit(): void {
    this.checkedInArr = this.passengerData.filter(obj => obj.checkInStatus === true)
  }

  onEmmit(data: Ipassenger) {
    let getIndex = this.passengerData.findIndex(obj => obj.id === data.id)
    if (data.checkInStatus === true) {
      let chekInIndex = this.checkedInArr.findIndex(obj => obj.id === data.id)
      this.checkedInArr.splice(chekInIndex, 1)
    }
    this.passengerData.splice(getIndex, 1)
  }

}

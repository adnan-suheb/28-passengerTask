import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../interface/passenger.interface';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit {

  @Input() getPassList!:Ipassenger

  constructor() { }

  ngOnInit(): void {
  }

}

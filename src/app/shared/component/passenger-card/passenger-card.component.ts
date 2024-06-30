import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipassenger } from '../../interface/passenger.interface';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {

  @ViewChild('inputRef') inputRef!: ElementRef
  @ViewChild('editRef') editRef!: ElementRef
  @ViewChild('updateRef') updateRef!: ElementRef

  @Input() getPassObj!: Ipassenger

  @Output() emmitPassObj: EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>()
  constructor() { }

  ngOnInit(): void {

  }



  onEdit() {
    this.inputRef.nativeElement.removeAttribute('disabled');
    console.log(this.editRef.nativeElement)
    this.editRef.nativeElement.style.display = 'none'
    this.updateRef.nativeElement.style.display = 'block'

  }
  onUpdate() {
    let inputControl = this.inputRef.nativeElement as HTMLInputElement;
    let val = inputControl.value as string;
    this.getPassObj.fname = val;
    this.inputRef.nativeElement.setAttribute('disabled', 'disabled');
    this.updateRef.nativeElement.style.display = 'none'
    this.editRef.nativeElement.style.display = 'block'
  }

  onRemove() {
    let result = confirm('Do You Want To Remove This Passenger?');
    if (result === true) {
      this.emmitPassObj.emit(this.getPassObj)
    }

  }

}

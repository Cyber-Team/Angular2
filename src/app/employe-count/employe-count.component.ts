import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employe-count',
  templateUrl: './employe-count.component.html',
  styleUrls: ['./employe-count.component.css']
})
export class EmployeCountComponent implements OnInit {

  selectRadioButtonValue: string = 'All';

  @Output()
  countRadioButtonSelectionChange: EventEmitter<string> = new EventEmitter<string>();


  @Input()
  all: number;

  @Input()
  male: number;

  @Input()
  female: number;

  OnRadioButtonChange(){
    this.countRadioButtonSelectionChange.emit(this.selectRadioButtonValue);
    console.log(this.selectRadioButtonValue);
  }

  constructor() { }

  ngOnInit() {
  }

}

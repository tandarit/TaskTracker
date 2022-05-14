import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color:string;
  @Input() text:string;
  @Output() btnClick = new EventEmitter();

  constructor() { 
    this.color = "";
    this.text = "";

  }

  onClick():void {
    console.log("button pressed");
    this.btnClick.emit();
  }

  

  ngOnInit(): void {
  }

}

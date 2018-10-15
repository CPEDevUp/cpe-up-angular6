import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-st1000',
  templateUrl: './st1000.component.html',
  styleUrls: ['./st1000.component.css']
})
export class St1000Component implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  sideBar(){
    $('.ui.sidebar').sidebar('toggle');
  }
}

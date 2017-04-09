import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isIn: boolean
  constructor() { 
    this.isIn = false;
  }

  ngOnInit() {
  }

  toggleInClass() {
    this.isIn = (this.isIn === false) ? true : false;
  }

}

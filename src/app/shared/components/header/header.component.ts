import { Component, OnInit,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleClicked=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  logOut(){
  }

  toggleNav(){
    this.toggleClicked.emit();
  }
}

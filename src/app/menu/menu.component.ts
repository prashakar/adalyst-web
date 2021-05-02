import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'adalyst-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faPlusCircle = faPlusCircle;

  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}

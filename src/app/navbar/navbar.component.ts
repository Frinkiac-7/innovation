import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

	isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;

	active_status: number = 1;

	ngOnInit(): void {
  }

}

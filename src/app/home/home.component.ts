import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	faPhoneAlt = faPhoneAlt;
	faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}

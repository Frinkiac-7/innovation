import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.css']
})
export class InitiativesComponent implements OnInit {

	faExtLinkAlt = faExternalLinkAlt;
	
  constructor() { }

  ngOnInit(): void {
  }

}

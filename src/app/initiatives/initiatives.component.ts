import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt, faIdCard, faRobot, faFileContract, faSchool, faSearchPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.css']
})
export class InitiativesComponent implements OnInit {

	faExtLinkAlt = faExternalLinkAlt;
	faIdCard = faIdCard;
	faRobot = faRobot;
	faFileContract = faFileContract;
	faSchool = faSchool;
	faSearchPlus = faSearchPlus;

  constructor() { }

  ngOnInit(): void {
  }

}

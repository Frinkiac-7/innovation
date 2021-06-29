import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit } from '@angular/core';
import { faChartLine, faEye, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-odportal',
  templateUrl: './odportal.component.html',
  styleUrls: ['./odportal.component.css']
})
export class OdportalComponent implements OnInit {

	faChartLine = faChartLine;
	faEye = faEye;
	faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}

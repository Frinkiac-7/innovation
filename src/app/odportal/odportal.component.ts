import { OdpapiService } from './../services/odpapi.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit } from '@angular/core';
import { faChartLine, faEye, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-odportal',
  templateUrl: './odportal.component.html',
  styleUrls: ['./odportal.component.css']
})
export class OdportalComponent implements OnInit {

	responseData = {}
	faChartLine = faChartLine;
	faEye = faEye;
	faStar = faStar;
	// value = [];
	clickMessage = {};

  getAPIData() {
		this.api.getApi().subscribe((data: any) => {
			this.clickMessage = data;
			console.log('this.clickMessage:', this.clickMessage)
		});
  }

  constructor(public api: OdpapiService) {

	}
	
  ngOnInit(): void {
  }

}

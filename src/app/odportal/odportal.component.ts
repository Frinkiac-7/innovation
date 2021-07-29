import { OdpapiService } from './../services/odpapi.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit } from '@angular/core';

import { Odp } from '../interfaces/odp';
@Component({
  selector: 'app-odportal',
  templateUrl: './odportal.component.html',
  styleUrls: ['./odportal.component.css']
})
export class OdportalComponent implements OnInit {

	public totalDatasets!: Odp;
	public totalRecords!: Odp;
	public serviceResponse!: Odp;
	
  getAPIData() {
		this.api.getFullApiResponse().subscribe((data: any) => {
			this.serviceResponse = data;
			this.totalRecords = data.result.records.length
			console.log('this.totalRecords:', this.totalRecords)
			console.log('this.serviceResponse:', this.serviceResponse)
		});
  }

	getAPIRecords() {
		this.api.getRecords().subscribe((data: any) => {
			this.serviceResponse = data;
			console.log('this.serviceResponse:', this.serviceResponse)
		});
  }

  constructor(public api: OdpapiService) {

	}
	
  ngOnInit(): void {

		this.api.getAllPackageData().subscribe((data: any) => {
		this.totalDatasets = data.length;
		})

		this.api.getFullApiResponse().subscribe((data: any) => {
			this.totalRecords = data.result.total
		})
		
	}

}

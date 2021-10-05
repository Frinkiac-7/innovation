import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { OdpapiService } from '../services/odpapi.service';
import { Odp } from '../interfaces/odp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	public totalDatasets!: Odp;
	public totalRecords!: Number;
	faPhoneAlt = faPhoneAlt;
	faEnvelope = faEnvelope;

  constructor(public api: OdpapiService) { }

  ngOnInit(): void {

		this.api.getPkgList().subscribe((data: any) => {
			this.totalDatasets = data.length;
		})

		this.api.getPkgsWithResources().subscribe((data: any) => {
			let totalRecords = 0
			data.result.forEach((dataset: any) => {
				if (dataset.maintainer !== null) {
					dataset.resources.forEach((resources: any) => {
						if (resources.resource_id) {
							this.api.getRecords(resources.resource_id).subscribe((data: any) => {
								totalRecords += data
								this.totalRecords = totalRecords
							})
						}
					})
				}
			})
		})
  }

}

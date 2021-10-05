import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { OdpapiService } from '../services/odpapi.service';
import bb, { gauge } from "billboard.js";
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

		let totalRecords = 0;

		// for ESM environment, need to import modules as:
		// import bb, {gauge} from "billboard.js"

		const chart = bb.generate({
			data: {
				columns: [
					["Clerk", 8000], 
				],
				type: gauge(), // for ESM specify as: gauge()
				onclick: function (d, i) {
					console.log("onclick", d, i);
				},
				onover: function (d, i) {
					console.log("onover", d, i);
				},
				onout: function (d, i) {
					console.log("onout", d, i);
				}
			},
			gauge: {
				background: "#abc", // will set 'fill' css prop for '.bb-chart-arcs-background' classed element.
				fullCircle: false,
				label: {
						show: true,
				// 		format: function(value, ratio, id) {
				// 				return value;
	 
				// 				// to multiline, return with '\n' character
				// 				// return value +"%\nLine1\n2Line2";
				// 		},
	 
				// 		 extents: function(value, isMax) {
				// 				return (isMax ? "Max:" : "Min:") + value;
				// 		},
	 
				// 		// 0.1(10%) ratio value means, the minimum ratio to show text label relative to the total value.
				// 		// if data value is below than 0.1, text label will be hidden.
				// 		threshold: 0.1,
				},
	 
				// disable expand transition for interaction
				// expand: true,
	 
				expand: {
					// set duration of expand transition to 500ms.
						duration: 500,
	 
					// set expand area rate
						rate: 1
				},
	 
				min: 0,
				max: totalRecords,
				type: "single",  // or 'multi'
				// units: "%",
				// width: 75,
				startingAngle: -1 * Math.PI / 2,
				arcLength: 100,
				arcs: {
						minWidth: 5
				}
			},
			title: {
				// text: "Title Text",
	 
				// or Multiline title text
				text: "Records\nby Category",
	 
				padding: {
						// top: 10,
						// right: 10,
						bottom: 30,
						// left: 10
				},
				position: "center"
			},
			color: {
				pattern: [
					"#FF0000", // Red if <= 10000 
					"#F97600", // Heat Wave if <= 20000 
					"#F6C600", // Jonquil if <= 30000 
					"#60B044", // Green RYB if <= 40000 
					"#00A7E1", // Cerulean Crayola if <= 50000 
					"#587B7F", // Ming if <= 60000 
					"#233D4D", // Charcoal if <= 70000 
					"#5296A5", // Blue Munsell if <= 80000 
					"#82DDF0", // Sky Blue Crayola if <= 90000 
					"#1CA9C9", // Pacific Blue if <= 100000
					"#FFF000"  // White if >= 100000
				],
				threshold: {
					unit: "value",
					values: [
						10000,
						20000,
						30000,
						40000,
						50000,  
						60000,  
						70000,  
						80000,
						90000,
						100000
					]
				}
			},
			size: {
				height: 360
			},
			bindto: "#gaugeChart"
		});

		setTimeout(function () {
			chart.load({
				columns: [["DPW", 15000]]
			});
		}, 1000);

		setTimeout(function () {
			chart.load({
				columns: [["WFD", 25000]]
			});
		}, 2000);

		setTimeout(function () {
			chart.load({
				columns: [["WPD", 35000]]
			});
		}, 3000);

		setTimeout(function () {
			chart.load({
				columns: [["ECON", 45000]]
			});
		}, 4000);

		setTimeout(function () {
			chart.load({
				columns: [["CSRS", 55000]]
			});
		}, 5000);

		setTimeout(function () {
			chart.load({
				columns: [["A&F", 65000]]
			});
		}, 6000);

		setTimeout(function () {
			chart.load({
				columns: [["DIS", 75000]]
			});
		}, 7000);

		setTimeout(function () {
			chart.load({
				columns: [["HHS", 85000]]
			});
		}, 8000);

		setTimeout(function () {
			chart.load({
				columns: [["HR", 95000]]
			});
		}, 9000);

		setTimeout(function () {
			chart.load({
				columns: [["CM", 150000]]
			});
		}, 10000);

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

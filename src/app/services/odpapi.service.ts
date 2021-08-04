import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Odp } from '../interfaces/odp';
import { Package } from '../interfaces/packages'
@Injectable({
  providedIn: 'root'
})
export class OdpapiService {

	url = 'https://opendata.worcesterma.gov/api/3/action/datastore_search?resource_id=7b8bd90e-22ae-4ede-a7af-0ca5997ba07f&limit=100000';

	pkgsWithResources = 'https://opendata.worcesterma.gov/api/3/action/current_package_list_with_resources?limit=100';

	pkgList = 'https://opendata.worcesterma.gov/api/3/action/package_list'

  constructor(private http: HttpClient) { }

	getPkgList() {
    return this.http.get<Odp>(this.pkgList).pipe(map((data) => {
      return data.result;
    }))
	}

	getPkgsWithResources() {
    return this.http.get<Package>(this.pkgsWithResources).pipe(map((data) => {
			console.log('data.results:', data.result)
			data.result.forEach(element => {
				console.log('element:', element.resources[0].size)
			})
			// for (const key in data.result) {
			// 	console.log('FOCUS ON ME!! key:', key)
			// 	console.log('key is typeof:', typeof key)
			// }
    	return data.result;
    }))
	}

	getRecords() {
    return this.http.get<Odp>(this.url).pipe(map((data) => {
      return data;
    }))
	}

	getFullApiResponse() {
    return this.http.get<Odp>(this.url).pipe(map((data) => {
      return data;
    }))
  }

}

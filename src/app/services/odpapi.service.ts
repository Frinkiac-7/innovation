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

	url = 'https://opendata.worcesterma.gov/api/3/action/';

	datastoreSearch = 'datastore_search?id=';

	pkgsWithResources = 'current_package_list_with_resources?limit=100';

	pkgList = 'package_list'

  constructor(private http: HttpClient) { }

	getPkgList() {
    return this.http.get<Odp>(this.url+this.pkgList).pipe(map((data) => {
      return data.result;
    }))
	}

	getPkgsWithResources() {
    return this.http.get<Package>(this.url+this.pkgsWithResources).pipe(map((data) => {
    	return data;
    }))
	}

	getRecords(id: string) {
    return this.http.get<Odp>(this.url+this.datastoreSearch+id).pipe(map((data) => {
      return data.result.total;
    }))
	}

	getFullApiResponse() {
    return this.http.get<Odp>(this.url).pipe(map((data) => {
			return data;
    }))
  }

}

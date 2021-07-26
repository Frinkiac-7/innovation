import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Odp } from '../interfaces/odp';

@Injectable({
  providedIn: 'root'
})
export class OdpapiService {

	url = 'https://opendata.worcesterma.gov/api/3/action/datastore_search?resource_id=7b8bd90e-22ae-4ede-a7af-0ca5997ba07f&limit=100000';

	allPackages = 'https://opendata.worcesterma.gov/api/3/action/current_package_list_with_resources';

  constructor(private http: HttpClient) { }

	getAllPackageData() {
    return this.http.get<Odp>(this.allPackages).pipe(map((data) => {
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OdpapiService {

	url = 'https://opendata.worcesterma.gov/api/3/action/datastore_search?resource_id=7b8bd90e-22ae-4ede-a7af-0ca5997ba07f&limit=5'

  constructor(private http: HttpClient) { }

	getApi() {
    return this.http.get('https://opendata.worcesterma.gov/api/3/action/datastore_search?resource_id=7b8bd90e-22ae-4ede-a7af-0ca5997ba07f&limit=100000');
		// .pipe(map((data) => {
    //   console.log('data', data);
    //   return data;
    // }))
  }

}

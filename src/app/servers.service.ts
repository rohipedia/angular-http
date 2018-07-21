import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from "rxjs";

@Injectable()
export class ServersService {
  constructor(private http:Http) {
  }

  storeServers(servers:any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    //return this.http.post('https://udemy-ng-http-77a4f.firebaseio.com/data.json', servers, {headers: headers});
    return this.http.put('https://udemy-ng-http-77a4f.firebaseio.com/data.json', servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-77a4f.firebaseio.com/data.json')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ))
      .pipe(catchError(
        (error: Response) => {
          return throwError('Spmething went wrong');
        }
      ));
  }

  getAppName() {
    return this.http.get('https://udemy-ng-http-77a4f.firebaseio.com/appName.json')
      .pipe(map(
        (response: Response) => {
          return response.json();
        }
      ));
  }
}

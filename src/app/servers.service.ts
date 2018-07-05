import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServersService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('https://udemy-ng-http-77a4f.firebaseio.com/data.json', servers, {headers: headers});
    }


    getServers() {
        return this.http.get('https://udemy-ng-http-77a4f.firebaseio.com/data.json');
    }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LogItem } from 'app/app.component';

@Injectable()
export class ErrorService {

  constructor(private _http: Http) { }

  getErrorLog(): Observable<Array<LogItem>> {
    console.log('ran');
    return this._http
      .get('http://localhost:3000/errors')
      .map(response => response.json());
  }

}

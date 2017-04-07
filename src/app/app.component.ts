import { ErrorService } from './shared/error.service';
import { Component, OnInit } from '@angular/core';

export class LogItem {
  title: string;
  message: string;
  url: string;
  user: User;
  stack: string;
  id: number;
}

export class User {
  unique_name: string;
  sub: string;
  role: Array<string>;
  nsgTenantName: string;
  nsgAccountId: string;
  nsgUserId: string;
  nsgUserFirstName: string;
  iss: string;
  aud: string;
  exp: number;
  nbf: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedError: LogItem;
  errorFilter: any = { title: '' };
  errors: Array<LogItem>;

  constructor(private _errorService: ErrorService) { }

  ngOnInit() {
    this.getErrorLog();
    setInterval(() => this.getErrorLog(), 30000);
  }

  getErrorLog() {
    this._errorService.getErrorLog().subscribe(errors => {
      this.errors = errors.reverse();
      this.selectedError = this.selectedError ? this.selectedError : this.errors[0];
    });
  }

  selectError(error: LogItem) {
    this.selectedError = error;
  }
}

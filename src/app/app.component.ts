import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GeoG';

  constructor (
    private auth: AuthService
  ) {
    auth.handleAuth();
  }

  ngOnInit(): void {
  }

}

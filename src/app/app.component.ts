import { Component } from '@angular/core';
import { post } from 'selenium-webdriver/http';

import { GeolocationService } from './core/geolocation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GeoG';

  positioning = false;
  lat = 0;
  lng = 0;

  locationSub: Subscription;

  constructor (
    public loc: GeolocationService
  ) {}

  whereAmI() {
    this.positioning = true;
    this.locationSub = this.loc.getLocation()
      .subscribe(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.positioning = false;
      });
  }
}

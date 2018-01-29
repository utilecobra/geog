import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GeolocationService, GeolocationServiceState } from '../../core/geolocation.service';
import { Position, PositionError } from '../../core/models/geolocation';

@Component({
  selector: 'app-map-test',
  templateUrl: './map-test.component.html',
  styleUrls: ['./map-test.component.scss']
})
export class MapTestComponent implements OnInit, OnDestroy {
  positioning = false;
  lat = 0;
  lng = 0;

  locationSub: Subscription;
  locationStateSub: Subscription;

  constructor(
    private loc: GeolocationService
  ) { }

  ngOnInit() {
    this.locationStateSub = this.loc.stateChanged
      .subscribe((state: GeolocationServiceState) => {
        if (state === GeolocationServiceState.Searching) {
          this.positioning = true;
        } else {
          this.positioning = false;
        }
      });
  }

  whereAmI() {
    this.positioning = true;
    this.locationSub = this.loc.getLocation()
      .subscribe(
        (position: Position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.positioning = false;
        },
        (error: PositionError) => {
          console.error(error);
        });
  }

  ngOnDestroy(): void {
    this.locationSub.unsubscribe();
    this.locationStateSub.unsubscribe();
  }

}

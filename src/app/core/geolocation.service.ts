import { Injectable } from '@angular/core';

import { GeolocationOptions, Position } from './models/geolocation';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeolocationService {

  constructor() { }

  getLocation(opts?: GeolocationOptions): Observable<Position> {
    return Observable.create(observer => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position: Position) => {
            observer.next(position);
          },
          error => {
            observer.error(error);
          },
          opts || { timeout: 5000 }
        );
      }
    });
  }
}

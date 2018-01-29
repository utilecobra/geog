import { Injectable, EventEmitter } from '@angular/core';

import { GeolocationOptions, Position, PositionError } from './models/geolocation';
import { Observable } from 'rxjs/Observable';

enum GeolocationServiceState {
  Idle,
  Searching,
  Tracking
}

const DEFAULT_TIMEOUT = 5000;

@Injectable()
class GeolocationService {
  private _state: GeolocationServiceState;
  public stateChanged: EventEmitter<GeolocationServiceState>;

  constructor() {
    this._state = GeolocationServiceState.Idle;
    this.stateChanged = new EventEmitter();
   }

  getLocation(opts?: GeolocationOptions): Observable<Position> {
    return Observable.create(observer => {
      if (window.navigator && window.navigator.geolocation) {
        this._setState(GeolocationServiceState.Searching);
        window.navigator.geolocation.getCurrentPosition(
          (position: Position) => {
            this._setState(GeolocationServiceState.Idle);
            observer.next(position);
          },
          (error: PositionError) => {
            this._setState(GeolocationServiceState.Idle);
            observer.error(error);
          },
          opts || { timeout: DEFAULT_TIMEOUT }
        );
      }
    });
  }

  private _setState(state: GeolocationServiceState) {
    this._state = state;
    this.stateChanged.next(this._state);
  }

}

export { GeolocationService, GeolocationServiceState };

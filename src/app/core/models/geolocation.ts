interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  maxAge?: number;
  timeout?: number;
}

interface Position {
  coords: {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  };
  timestamp: number;
}

export { GeolocationOptions, Position };

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

enum PositionErrorCode {
  PERMISSION_DENIED = 1,
  POSITION_UNAVAILABLE,
  TIMEOUT
}

interface PositionError {
  code: PositionErrorCode;
  message: string;
}

export { GeolocationOptions, Position, PositionError };

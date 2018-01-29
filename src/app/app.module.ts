import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material.module';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { GeolocationService } from './core/geolocation.service';
import { MapTestComponent } from './pages/map-test/map-test.component';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    MapTestComponent,
    HomeComponent,
    CallbackComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.MAPS_API_KEY
    }),
    AuthModule.forRoot(),
  ],
  providers: [
    GeolocationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

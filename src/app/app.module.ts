import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// enviroments
import { environment } from './../environments/environment';
// angular material
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// angular google maps
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapPlacesComponent } from './map-places/map-places.component';


@NgModule({
  declarations: [
    AppComponent,
    MapPlacesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMaps.apiKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

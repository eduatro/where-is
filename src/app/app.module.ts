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
// angular firebase, angular firestore
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { MapPlacesComponent } from './map-places/map-places.component';
import { PlacesComponent } from './places/places.component';

// routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MapPlacesComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMaps.apiKey
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { MapPlacesComponent } from './map-places/map-places.component';
import { PlacesComponent } from './places/places.component';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'map',       component: MapPlacesComponent },
  { path: 'my-places', component: PlacesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

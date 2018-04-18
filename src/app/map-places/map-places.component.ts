import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-places',
  templateUrl: './map-places.component.html',
  styleUrls: ['./map-places.component.css']
})
export class MapPlacesComponent implements OnInit {
  title: string;
  latitude: number;
  longitude: number;
  zoom: number;
  constructor() {}

  ngOnInit() {
    this.title = 'My first AGM project';
    this.latitude = -17.382021;
    this.longitude = -66.159841;
    this.zoom = 14;
  }

}

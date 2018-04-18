import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.places = this.db.collection('/places').valueChanges();
  }

}

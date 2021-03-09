import { Component } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animals = [{ "name": "Goat", "weight": 40 }, { "name": "Tiger", "weight": 70 }, { "name": "Rabbit", "weight": 5 }, { "name": "Buffalo", "weight": 150 }, { "name": "Sheep", "weight": 35 }, { "name": "Elephant", "weight": 400 }];

  nameSort(names) {
    this.animals.sort((a, b) => a.name.localeCompare(b.name));
  }

  weightSort(weights) {
    this.animals = _.sortBy(this.animals, 'weight');

  }

}


import { Component } from '@angular/core';
import * as _ from 'lodash';  // Importing lodash for Array operations


@Component({   // Decorator 
  selector: 'app-root',       // selector 
  templateUrl: './app.component.html',  // Link path of respective view(template) from component
  styleUrls: ['./app.component.css']     // Link path of respective css files for the view from component
})
export class AppComponent {

  animals = [ { "name": "Goat", "weight": 40 },  // Delcared Array of Animals with name and weight properties
              { "name": "Tiger", "weight": 70 }, 
              { "name": "Rabbit", "weight": 5 }, 
              { "name": "Buffalo", "weight": 150}, 
              { "name": "Sheep", "weight": 35}, 
              { "name": "Elephant", "weight": 400}
            ];

  nameSort(names) {  // Sorting based on the Animal's Names
    this.animals.sort((a, b) => a.name.localeCompare(b.name));
  }

  weightSort(weights) {  // Sorting based on the Animal's Weights
    this.animals = _.sortBy(this.animals, 'weight');

  }

}


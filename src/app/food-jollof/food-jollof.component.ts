import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-jollof',
  templateUrl: './food-jollof.component.html',
  styleUrls: ['./food-jollof.component.css']
})
export class FoodJollofComponent implements OnInit {
  foods =[{ title:"Jollof Etcetera"
},{ title: "Jollof Etcetera"
},{ title: "Jollof Etcetera"
},{ title: "Jollof Etcetera"
}]
  constructor() { }

  ngOnInit() {
  }

}

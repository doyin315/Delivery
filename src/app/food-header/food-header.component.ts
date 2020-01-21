import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-header',
  templateUrl: './food-header.component.html',
  styleUrls: ['./food-header.component.css']
})
export class FoodHeaderComponent implements OnInit {
  navitems=[{title:"Order",
  link:"/fooddelivery/order"
    },
    {title:"Reviews",
    link:"/fooddelivery/reviews"
    },
    {title:"Info",
        link:"/fooddelivery/info"
      }
    ]
  constructor() { }

  ngOnInit() {
  }

}

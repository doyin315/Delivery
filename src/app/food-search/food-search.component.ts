import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent implements OnInit {
  navitems= [{title:"Home"},
    {title: "Payment" },
    {title: "My Orders"}
  ]
  ratings=[
    {
      food:"Chinese"
    },
    {
      food:"African"
    },
    {
      food:"Nigerian"
    },
    {
      food:"International"
    },
    {
      food:"Italian"
    },
    {
      food:"Thai Cuisine"
    },
    {
      food:"Breakfast"
    },
  ]

  places = [{
      title:"Jollof Etcetera",
      logo: "../../assets/images/jollof.png",

    },
    {
      title:"The Place Eatery",
      logo:"../../assets/images/the_place.png",

    },
    {
      title:"Delicious Food",
      logo: "../../assets/images/jollof.png",
    },
    {
      title:"The Best Eatery",
      logo:"../../assets/images/the_place.png",
    },
    {
      title:"JAwesomeness",
      logo: "../../assets/images/jollof.png",
    },
    {
      title:"One of a kind",
      logo:"../../assets/images/the_place.png",
    }
    ]
    pills=[{title:"All"

    },{title:"Closed"

    },{title:"Open"

    },]
  constructor() { }

  ngOnInit() {
  }

}

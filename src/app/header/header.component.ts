import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navitems=[{title:"Courier Services",
    link:"/courierpage/"
      },
      {title:"Food Delivery",
      link:"/fooddelivery/"
      },
      {title:"How It Works",
          link:"#"
        },
      {title:"FAQs",
      link:"#"
    },
    {title:"Sign In",
        link:"/SignIn"
      },
      {title:"Become a Dispatcher",
      link:"#"
    },]
  constructor() { }

  ngOnInit() {
  }

}

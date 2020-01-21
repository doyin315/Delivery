import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-white-navbar',
  templateUrl: './white-navbar.component.html',
  styleUrls: ['./white-navbar.component.css']
})
export class WhiteNavbarComponent implements OnInit {
  navitems=[{title:"Home",
    link:"#"
      },
      {title:"Payment Methods",
      link:"#"
      },
      {title:"History",
          link:"#"
        }]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {
  selection=[{text:"Select Your Restaurant"},
  {text:"Select Your Desired Meal"},
  {text:"Get It Delivered Fast"}
]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-categories',
  templateUrl: './dish-categories.component.html',
  styleUrls: ['./dish-categories.component.css']
})
export class DishCategoriesComponent implements OnInit {
  dishes = [{title: 'Main Dish'},
  {title: 'Soup'},
  {title: 'Protein'},
  {title: 'Sides'},
  {title: 'Snacks'},
  {title: 'Desserts'}];

  Category = [ {title: 'Main dishes'}, {title: 'Soup'} ];

  MainDish = [{title: 'Fried Rice'},
  {title: 'Fried Rice'},
  {title: 'Fried Rice'},
  {title: 'Fried Rice'}
    ];

  costs = [{title: 'Delivery fee',
          price: '#450.00'},
          {title: 'Food Pack',
          price: '#100.00'},
          {title: 'Including VAT',
          price: '#104.76'}];
  constructor() { }

  ngOnInit() {
  }

}

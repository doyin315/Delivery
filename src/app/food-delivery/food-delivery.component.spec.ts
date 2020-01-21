import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDeliveryComponent } from './food-delivery.component';

describe('FoodDeliveryComponent', () => {
  let component: FoodDeliveryComponent;
  let fixture: ComponentFixture<FoodDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

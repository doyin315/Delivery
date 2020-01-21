import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHeaderComponent } from './food-header.component';

describe('FoodHeaderComponent', () => {
  let component: FoodHeaderComponent;
  let fixture: ComponentFixture<FoodHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodJollofComponent } from './food-jollof.component';

describe('FoodJollofComponent', () => {
  let component: FoodJollofComponent;
  let fixture: ComponentFixture<FoodJollofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodJollofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodJollofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

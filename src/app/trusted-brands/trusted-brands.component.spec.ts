import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedBrandsComponent } from './trusted-brands.component';

describe('TrustedBrandsComponent', () => {
  let component: TrustedBrandsComponent;
  let fixture: ComponentFixture<TrustedBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustedBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

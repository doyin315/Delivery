import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteNavbarComponent } from './white-navbar.component';

describe('WhiteNavbarComponent', () => {
  let component: WhiteNavbarComponent;
  let fixture: ComponentFixture<WhiteNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDispatcherComponent } from './register-dispatcher.component';

describe('RegisterDispatcherComponent', () => {
  let component: RegisterDispatcherComponent;
  let fixture: ComponentFixture<RegisterDispatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDispatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

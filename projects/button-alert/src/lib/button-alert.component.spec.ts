import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAlertComponent } from './button-alert.component';

describe('ButtonAlertComponent', () => {
  let component: ButtonAlertComponent;
  let fixture: ComponentFixture<ButtonAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAlertComponent]
    });
    fixture = TestBed.createComponent(ButtonAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

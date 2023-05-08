import { TestBed } from '@angular/core/testing';

import { ButtonAlertService } from './button-alert.service';

describe('ButtonAlertService', () => {
  let service: ButtonAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

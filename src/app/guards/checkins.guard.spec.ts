import { TestBed } from '@angular/core/testing';

import { CheckinsGuard } from './checkins.guard';

describe('CheckinsGuard', () => {
  let guard: CheckinsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckinsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

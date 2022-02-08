import { TestBed } from '@angular/core/testing';

import { CheckoutsGuard } from './checkouts.guard';

describe('CheckoutsGuard', () => {
  let guard: CheckoutsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckoutsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

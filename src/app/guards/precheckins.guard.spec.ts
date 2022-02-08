import { TestBed } from '@angular/core/testing';

import { PrecheckinsGuard } from './precheckins.guard';

describe('PrecheckinsGuard', () => {
  let guard: PrecheckinsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrecheckinsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

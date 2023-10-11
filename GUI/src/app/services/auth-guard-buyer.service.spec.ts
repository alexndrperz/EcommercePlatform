import { TestBed } from '@angular/core/testing';

import { AuthGuardBuyerService } from './auth-guard-buyer.service';

describe('AuthGuardBuyerService', () => {
  let service: AuthGuardBuyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardBuyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BuyabookformService } from './buyabookform.service';

describe('BuyabookformService', () => {
  let service: BuyabookformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyabookformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

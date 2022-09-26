import { TestBed } from '@angular/core/testing';

import { PurchasedbookformService } from './purchasedbookform.service';

describe('PurchasedbookformService', () => {
  let service: PurchasedbookformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchasedbookformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

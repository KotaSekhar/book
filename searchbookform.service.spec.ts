import { TestBed } from '@angular/core/testing';

import { SearchbookformService } from './searchbookform.service';

describe('SearchbookformService', () => {
  let service: SearchbookformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchbookformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReaderformService } from './readerform.service';

describe('ReaderformService', () => {
  let service: ReaderformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReaderformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

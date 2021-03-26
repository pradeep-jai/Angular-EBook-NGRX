import { TestBed } from '@angular/core/testing';

import { FetchBookDetailsService } from './fetch-book-details.service';

describe('FetchBookDetailsService', () => {
  let service: FetchBookDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchBookDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

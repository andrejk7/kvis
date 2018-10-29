import { TestBed, inject } from '@angular/core/testing';

import { FileEncodingService } from './file-encoding.service';

describe('FileEncodingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileEncodingService]
    });
  });

  it('should be created', inject([FileEncodingService], (service: FileEncodingService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CuSeKacimService } from './cu-se-kacim.service';

describe('CuSeKacimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuSeKacimService]
    });
  });

  it('should be created', inject([CuSeKacimService], (service: CuSeKacimService) => {
    expect(service).toBeTruthy();
  }));
});

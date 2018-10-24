import { TestBed, inject } from '@angular/core/testing';

import { CurrentTopicService } from './current-topic.service';

describe('CurrentTopicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentTopicService]
    });
  });

  it('should be created', inject([CurrentTopicService], (service: CurrentTopicService) => {
    expect(service).toBeTruthy();
  }));
});

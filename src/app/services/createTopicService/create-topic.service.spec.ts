import { TestBed, inject } from '@angular/core/testing';

import { CreateTopicService } from './create-topic.service';

describe('CreateTopicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateTopicService]
    });
  });

  it('should be created', inject([CreateTopicService], (service: CreateTopicService) => {
    expect(service).toBeTruthy();
  }));
});

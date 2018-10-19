import { TestBed, inject } from '@angular/core/testing';

import { ManageTopicService } from './manage-topic.service';

describe('ManageTopicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageTopicService]
    });
  });

  it('should be created', inject([ManageTopicService], (service: ManageTopicService) => {
    expect(service).toBeTruthy();
  }));
});

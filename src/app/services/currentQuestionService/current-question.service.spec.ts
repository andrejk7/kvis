import { TestBed, inject } from '@angular/core/testing';

import { CurrentQuestionService } from './current-question.service';

describe('CurrentQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentQuestionService]
    });
  });

  it('should be created', inject([CurrentQuestionService], (service: CurrentQuestionService) => {
    expect(service).toBeTruthy();
  }));
});

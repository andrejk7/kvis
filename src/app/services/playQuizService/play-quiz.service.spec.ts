import { TestBed, inject } from '@angular/core/testing';

import { PlayQuizService } from './play-quiz.service';

describe('PlayQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayQuizService]
    });
  });

  it('should be created', inject([PlayQuizService], (service: PlayQuizService) => {
    expect(service).toBeTruthy();
  }));
});

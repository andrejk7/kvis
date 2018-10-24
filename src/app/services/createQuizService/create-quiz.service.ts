import { Injectable } from '@angular/core';
import { Quiz } from '../../../types/quiz';
import { CurrentQuizService } from '../currentQuizService/current-quiz.service';

@Injectable()
export class CreateQuizService {

  constructor(
    private currentQuizService: CurrentQuizService,
  ) { }

  saveQuiz = (quiz: Quiz) => {
    this.currentQuizService.storeQuiz(quiz);
  }
}

import { Injectable } from '@angular/core';
import { Quiz } from '../../../types/quiz';

@Injectable()
export class CurrentQuizService {
  private quiz: Quiz;

  storeQuiz = (quiz: Quiz) => {
    this.quiz = { ...quiz };
  }

  getQuiz = (): Quiz => {
    return this.quiz;
  }
}

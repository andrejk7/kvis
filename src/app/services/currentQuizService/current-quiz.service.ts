import { Injectable } from '@angular/core';
import { Quiz } from '../../../types/quiz';

const mockQuiz = {
  name: 'Trucks Quiz',
  topics: [
    {
      name: 'trucks',
      questions: [
        {
          points: 10,
          question: 'Rubber Duck\'s truck?',
          answer: 'Mack'
        },
        {
          points: 20,
          question: 'Jerry Reed\'s truck?',
          answer: 'Kenworth w900'
        },
        {
          points: 30,
          question: 'Duel truck?',
          answer: 'Peterbilt 351'
        },
        {
          points: 40,
          question: 'Ugliest Ukrainian truck?',
          answer: 'KrAZ 255'
        },
        {
          points: 50,
          question: 'Dr. alcohol. Kolaroff concert truck?',
          answer: 'DAF XF'
        }
      ]
    },
  ]
};

@Injectable()
export class CurrentQuizService {
  private quiz: Quiz;

  storeQuiz = (quiz: Quiz) => {
    this.quiz = { ...quiz };
  }

  getQuiz = (): Quiz => {
    return this.quiz || mockQuiz;
  }
}

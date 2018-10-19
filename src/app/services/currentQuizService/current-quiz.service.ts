import { Injectable } from '@angular/core';
import { Quiz } from '../../../types/quiz';

const mockQuiz = {
  id: 0,
  name: 'Trucks Quiz',
  isStoredOnDisc: false,
  topics: [
    {
      id: 0,
      name: 'trucks',
      questions: [
        {
          id: 0,
          points: 10,
          question: 'Rubber Duck\'s truck?',
          answer: 'Mack'
        },
        {
          id: 1,
          points: 20,
          question: 'Jerry Reed\'s truck?',
          answer: 'Kenworth w900'
        },
        {
          id: 2,
          points: 30,
          question: 'Duel truck?',
          answer: 'Peterbilt 351'
        },
        {
          id: 3,
          points: 40,
          question: 'Ugliest Ukrainian truck?',
          answer: 'KrAZ 255'
        },
        {
          id: 4,
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

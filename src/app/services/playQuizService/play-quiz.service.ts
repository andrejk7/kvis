import { Injectable } from '@angular/core';
import { ObjectMapper } from '../../common/objectMapper';
import { Quiz } from '../../../types/quiz';
import { Round } from '../../../types/round';
import { Topic } from '../../../types/topic';
import { Question, PlayableQuestion } from '../../../types/question';

const mockQuiz: Quiz = {
  id: 0,
  name: 'quiz',
  rounds: [
    {
      id: 0,
      topics: [
        {
          id: 0,
          name: 'idiot math',
          questions: [
            {
              id: 0,
              points: 10,
              question: '2 + 2?',
              answer: '4'
            },
            {
              id: 1,
              points: 20,
              question: '3 + 2?',
              answer: '5'
            }
          ]
        },
        {
          id: 1,
          name: 'idiot math 2',
          questions: [
            {
              id: 0,
              points: 10,
              question: '2 * 2?',
              answer: '4'
            },
            {
              id: 1,
              points: 20,
              question: '3 * 2?',
              answer: '6'
            }
          ]
        }
      ]
    },
    {
      id: 1,
      topics: [
        {
          id: 0,
          name: 'idiot math 3',
          questions: [
            {
              id: 0,
              points: 10,
              question: '2 - 2?',
              answer: '0'
            },
            {
              id: 1,
              points: 20,
              question: '3 + 4?',
              answer: '7'
            }
          ]
        }
      ]
    }
  ]
};

@Injectable()
export class PlayQuizService {
  private quiz: Quiz;

  constructor() {
    this.initializeQuiz(mockQuiz);
  }

  initializeQuiz = (quiz: Quiz) => {
    this.quiz = ObjectMapper.deepCopy(quiz);
    this.quiz.rounds.forEach((round: Round) => {
      round.topics.forEach((topic: Topic) => {
        topic.questions.forEach((
          question: Question,
          index: number,
          questions: Array<Question>
        ) => {
          questions[index] = <PlayableQuestion>{ ...question, answered: false };
        });
      });
    });
  }
}

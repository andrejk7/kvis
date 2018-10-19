import { Injectable } from '@angular/core';
import { Quiz } from '../../../types/quiz';
import { Topic } from '../../../types/topic';
import { Question } from '../../../types/question';
import { RefMapper } from '../../common/refMapper';

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

  constructor() {
    this.quiz = mockQuiz;
    console.log(RefMapper.generateNextId(this.quiz.topics[0].questions));
  }

  storeQuiz = (quiz: Quiz) => {
    this.quiz = { ...quiz };
  }

  getQuiz = (): Quiz => {
    return this.quiz;
  }

  getTopic = (id: number): Topic => {
    const index = RefMapper.findIndex(this.quiz.topics, id);
    if (index === -1) { return; }
    return this.quiz.topics[index];
  }

  updateTopic = (id: number, data: Topic) => {
    const index = RefMapper.findIndex(this.quiz.topics, id);
    if (index === -1) { return; }
    this.quiz.topics[index] = { ...data };
  }

  getQuestion = (topicId: number, questionId: number): Question => {
    const topic = this.getTopic(topicId);
    if (!topic) { return; }
    const index = RefMapper.findIndex(topic.questions, questionId);
    if (index === -1) { return; }
    return topic.questions[index];
  }

  updateQuestion = (topicId: number, questionId: number, data: Question) => {
    const topicIndex = RefMapper.findIndex(this.quiz.topics, topicId);
    if (topicIndex === -1) { return; }
    const questionIndex = RefMapper.findIndex(this.quiz.topics[topicIndex].questions, questionId);
    if (questionIndex === -1) { return; }
    this.quiz.topics[topicIndex].questions[questionIndex] = { ...data };
  }
}

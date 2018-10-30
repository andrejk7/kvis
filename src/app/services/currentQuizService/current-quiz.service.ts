import { Injectable } from '@angular/core';
import { Quiz } from '../../../types/quiz';
import { Topic } from '../../../types/topic';
import { Question } from '../../../types/question';
import { Round } from '../../../types/round';
import { RefMapper } from '../../common/refMapper';
import { ObjectMapper } from '../../common/objectMapper';
import { FileService } from '../fileService/file.service';

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
  private quizInitialState: Quiz;

  constructor(
    private fileService: FileService,
  ) { }

  storeQuiz = (quiz: Quiz) => {
    this.quiz = ObjectMapper.deepCopy(quiz);
    this.quizInitialState = ObjectMapper.deepCopy(quiz);
  }

  restoreQuiz = () => {
    this.storeQuiz(this.quizInitialState);
  }

  getQuiz = (): Quiz => {
    return this.quiz;
  }

  updateTopic = (id: number, data: Topic) => {
    const index = RefMapper.findIndex(this.quiz.topics, id);
    if (index === -1) { return; }
    this.quiz.topics[index] = ObjectMapper.deepCopy(data);
  }

  addTopic = (data: Topic): Topic => {
    const topic = ObjectMapper.deepCopy(data);
    topic.id = RefMapper.generateNextId(this.quiz.topics);
    this.quiz.topics.push(topic);
    return topic;
  }

  removeTopic = (id: number) => {
    const index = RefMapper.findIndex(this.quiz.topics, id);
    if (index === -1) { return; }
    this.quiz.topics.splice(index, 1);
  }

  updateRound = (id: number, data: Round) => {
    const index = RefMapper.findIndex(this.quiz.rounds, id);
    if (index === -1) { return; }
    this.quiz.rounds[index] = ObjectMapper.deepCopy(data);
  }

  addRound = (): Round => {
    const round = new Round();
    round.topicIds = [];
    round.id = RefMapper.generateNextId(this.quiz.rounds);
    this.quiz.rounds.push(round);
    return round;
  }

  removeRound = (id: number) => {
    const index = RefMapper.findIndex(this.quiz.rounds, id);
    if (index === -1) { return; }
    this.quiz.rounds.splice(index, 1);
  }

  getRound = (id: number): Round => {
    const index = RefMapper.findIndex(this.quiz.rounds, id);
    if (index === -1) { return; }
    return this.quiz.rounds[index];
  }

  clearQuiz = () => {
    this.quiz = null;
  }

  saveQuiz = () => {
    this.fileService.saveQuiz(this.quiz);
  }
}

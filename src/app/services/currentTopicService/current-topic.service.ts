import { Injectable } from '@angular/core';
import { Topic } from '../../../types/topic';
import { Question } from '../../../types/question';
import { CurrentQuizService } from '../currentQuizService/current-quiz.service';
import { ObjectMapper } from '../../common/objectMapper';
import { RefMapper } from '../../common/refMapper';

@Injectable()
export class CurrentTopicService {
  private topic: Topic;

  constructor(
   private currentQuizService: CurrentQuizService,
  ) { }

  setTopic = (topic: Topic) => {
    this.topic = ObjectMapper.deepCopy(topic);
  }

  getTopic = (): Topic => {
    return this.topic;
  }

  saveTopic = () => {
    this.currentQuizService.updateTopic(this.topic.id, this.topic);
  }

  clearTopic = () => {
    this.topic = null;
  }

  getQuestion = (id: number): Question => {
    const index = RefMapper.findIndex(this.topic.questions, id);
    if (index === -1) { return; }
    return this.topic.questions[index];
  }

  updateQuestion = (id: number, data: Question) => {
    const index = RefMapper.findIndex(this.topic.questions, id);
    if (index === -1) { return; }
    this.topic.questions[index] = { ...data };
  }

  addQuestion = (data: Question): Question => {
    const question = { ...data };
    question.id = RefMapper.generateNextId(this.topic.questions);
    this.topic.questions.push(question);
    return question;
  }

  removeQuestion = (id: number) => {
    const index = RefMapper.findIndex(this.topic.questions, id);
    if (index === -1) { return; }
    this.topic.questions.splice(index, 1);
  }
}

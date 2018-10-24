import { Injectable } from '@angular/core';
import { Question } from '../../../types/question';
import { CurrentTopicService } from '../currentTopicService/current-topic.service';
import { ObjectMapper } from '../../common/objectMapper';

@Injectable()
export class CurrentQuestionService {
  private question: Question;

  constructor(
    private currentTopicService: CurrentTopicService,
  ) { }

  setQuestion = (question: Question) => {
    this.question = ObjectMapper.deepCopy(question);
  }

  getQuestion = (): Question => {
    return this.question;
  }

  saveQuestion = () => {
    this.currentTopicService.updateQuestion(this.question.id, this.question);
  }
}

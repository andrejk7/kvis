import { Injectable } from '@angular/core';
import { Question } from '../../../types/question';
import { CurrentTopicService } from '../currentTopicService/current-topic.service';

@Injectable()
export class CreateQuestionService {

  constructor(
    private currentTopicService: CurrentTopicService,
  ) { }

  saveQuestion = (question: Question) => {
    this.currentTopicService.addQuestion(question);
  }
}

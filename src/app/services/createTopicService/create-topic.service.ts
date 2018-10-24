import { Injectable } from '@angular/core';
import { Topic } from '../../../types/topic';
import { CurrentTopicService } from '../currentTopicService/current-topic.service';
import { CurrentQuizService } from '../currentQuizService/current-quiz.service';

@Injectable()
export class CreateTopicService {

  constructor(
    private currentTopicService: CurrentTopicService,
    private currentQuizService: CurrentQuizService,
  ) { }

  saveTopic = (topic: Topic) => {
    const topicWithId = this.currentQuizService.addTopic(topic);
    this.currentTopicService.setTopic(topicWithId);
  }
}

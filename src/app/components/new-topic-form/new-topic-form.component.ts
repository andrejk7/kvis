import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../../../types/quiz';
import { Topic } from '../../../types/topic';

const MIN_TOPIC_QUESTIONS_COUNT = 5;

@Component({
  selector: 'app-new-topic-form',
  templateUrl: './new-topic-form.component.html',
  styleUrls: ['./new-topic-form.component.css']
})
export class NewTopicFormComponent implements OnInit {
  @Input() quiz: Quiz;

  public topic: Topic;

  ngOnInit() {
    this.initializeTopic();
  }

  initializeTopic = () => {
    // dystopic axexexe
    this.topic = new Topic;
    this.topic.questions = [];
  }

  addTopicDisabled = (): boolean => {
    return this.topic.questions.length < MIN_TOPIC_QUESTIONS_COUNT;
  }
}

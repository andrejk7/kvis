import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Topic } from '../../../types/topic';

const MIN_TOPIC_QUESTIONS_COUNT = 5;

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent {
  @Input() topic: Topic;
  @Output() topicSubmitted: EventEmitter<void> = new EventEmitter<void>();

  addTopicDisabled = (): boolean => {
    return this.topic.questions.length < MIN_TOPIC_QUESTIONS_COUNT;
  }

  submitTopic = () => {
    this.topicSubmitted.emit();
  }
}

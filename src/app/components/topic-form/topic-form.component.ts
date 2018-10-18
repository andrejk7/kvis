import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Topic } from '../../../types/topic';
import { Question } from '../../../types/question';

const MIN_TOPIC_QUESTIONS_COUNT = 5;

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent {
  @Input() topic: Topic;
  @Output() topicSubmitted: EventEmitter<void> = new EventEmitter<void>();

  public editedQuestion: Question;

  addTopicDisabled = (): boolean => {
    return this.topic.questions.length < MIN_TOPIC_QUESTIONS_COUNT;
  }

  submitTopic = () => {
    this.topicSubmitted.emit();
  }
}

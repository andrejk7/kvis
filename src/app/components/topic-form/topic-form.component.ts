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
  @Output() submitted: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelled: EventEmitter<void> = new EventEmitter<void>();

  submitTopic = (event) => {
    event.preventDefault();
    this.submitted.emit();
  }

  cancel = () => {
    this.cancelled.emit();
  }
}

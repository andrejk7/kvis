import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../../types/question';
import { Topic } from '../../../types/topic';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  @Input() question: Question;
  @Output() submitted: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelled: EventEmitter<void> = new EventEmitter<void>();

  submitQuestion = (event: any) => {
    event.preventDefault();
    this.submitted.emit();
  }

  cancel = () => {
    this.cancelled.emit();
  }
}

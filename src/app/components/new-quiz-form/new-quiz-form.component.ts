import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Quiz } from '../../../types/quiz';

@Component({
  selector: 'app-new-quiz-form',
  templateUrl: './new-quiz-form.component.html',
  styleUrls: ['./new-quiz-form.component.css']
})
export class NewQuizFormComponent {
  @Input() quiz: Quiz;
  @Output() quizBasicsCreated: EventEmitter<void> = new EventEmitter<void>();

  createQuizBasics = () => {
    this.quizBasicsCreated.emit();
  }
}

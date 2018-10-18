import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Quiz } from '../../../types/quiz';

@Component({
  selector: 'app-quiz-basics-form',
  templateUrl: './quiz-basics-form.component.html',
  styleUrls: ['./quiz-basics-form.component.css']
})
export class QuizBasicsFormComponent {
  @Input() quiz: Quiz;
  @Output() quizBasicsSubmitted: EventEmitter<void> = new EventEmitter<void>();

  submitQuizBasics = () => {
    this.quizBasicsSubmitted.emit();
  }
}

import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Quiz } from '../../../types/quiz';

@Component({
  selector: 'app-quiz-basics-form',
  templateUrl: './quiz-basics-form.component.html',
  styleUrls: ['./quiz-basics-form.component.css']
})
export class QuizBasicsFormComponent implements OnInit {
  @Input() quiz: Quiz;
  @Output() quizBasicsCreated: EventEmitter<void> = new EventEmitter<void>();

  createQuizBasics = () => {
    this.quizBasicsCreated.emit();
  }
}

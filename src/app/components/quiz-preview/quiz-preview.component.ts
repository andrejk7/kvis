import { Component, Input } from '@angular/core';
import { Quiz } from '../../../types/quiz';

@Component({
  selector: 'app-quiz-preview',
  templateUrl: './quiz-preview.component.html',
  styleUrls: ['./quiz-preview.component.css']
})
export class QuizPreviewComponent {
  @Input() quiz: Quiz;
}

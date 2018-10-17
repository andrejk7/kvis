import { Component, Input } from '@angular/core';
import { Question } from '../../../types/question';

@Component({
  selector: 'app-question-preview',
  templateUrl: './question-preview.component.html',
  styleUrls: ['./question-preview.component.css']
})
export class QuestionPreviewComponent {
  @Input() question: Question;
}

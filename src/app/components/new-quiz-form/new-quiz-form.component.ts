import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../types/quiz';

@Component({
  selector: 'app-new-quiz-form',
  templateUrl: './new-quiz-form.component.html',
  styleUrls: ['./new-quiz-form.component.css']
})
export class NewQuizFormComponent implements OnInit {
  public quiz: Quiz;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Question } from '../../../types/question';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './new-question-form.component.html',
  styleUrls: ['./new-question-form.component.css']
})
export class NewQuestionFormComponent implements OnInit {
  public question: Question;

  constructor() { }

  ngOnInit() {
  }

}

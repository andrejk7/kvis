import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../types/question';
import { Topic } from '../../../types/topic';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  @Input() topic: Topic;
  public question: Question;

  constructor() { }

  ngOnInit() {
    this.initializeEmptyQuestion();
  }

  initializeEmptyQuestion = () => {
    this.question = new Question;
    this.initializeDefaultQuestionPoints();
  }

  initializeDefaultQuestionPoints = () => {
    // question's index + 1 when it'll be pushed to topic, multiplied by 10
    this.question.points = (this.topic.questions.length + 1) * 10;
  }

  submitQuestion = (event: any) => {
    event.preventDefault();
    this.topic.questions.push(this.question);
    this.initializeEmptyQuestion();
  }
}

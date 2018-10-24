import { Component, OnInit } from '@angular/core';
import { CreateQuizService } from '../../services/createQuizService/create-quiz.service';
import { Router } from '@angular/router';

import { Quiz } from '../../../types/quiz';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  public quiz: Quiz;

  constructor(
    private createQuizService: CreateQuizService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initializeQuiz();
  }

  initializeQuiz = () => {
    this.quiz = new Quiz;
    this.quiz.topics = [];
    this.quiz.isStoredOnDisc = false;
  }

  save = () => {
    this.createQuizService.saveQuiz(this.quiz);
    this.router.navigate(['/manage-quiz']);
  }

  cancel = () => {
    this.router.navigate(['/main']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CurrentQuizService } from '../../services/currentQuizService/current-quiz.service';
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
    private currentQuizService: CurrentQuizService,
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
    this.currentQuizService.storeQuiz(this.quiz);
    this.router.navigate(['/manage-quiz']);
  }

  cancel = () => {
    this.router.navigate(['/main']);
  }
}

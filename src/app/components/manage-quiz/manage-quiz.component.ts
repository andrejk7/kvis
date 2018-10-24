import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../../../types/quiz';
import { CurrentQuizService } from '../../services/currentQuizService/current-quiz.service';

@Component({
  selector: 'app-manage-quiz',
  templateUrl: './manage-quiz.component.html',
  styleUrls: ['./manage-quiz.component.css']
})
export class ManageQuizComponent implements OnInit {
  public quiz: Quiz;

  constructor(
    private currentQuizService: CurrentQuizService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.quiz = this.currentQuizService.getQuiz();
  }

  save = () => {
    this.goToMain();
  }

  cancel = () => {
    this.goToMain();
  }

  goToMain = () => {
    this.router.navigate(['/main']);
  }
}

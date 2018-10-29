import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../../services/fileService/file.service';
import { CurrentQuizService } from '../../services/currentQuizService/current-quiz.service';

import { Quiz } from '../../../types/quiz';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  private quizLoaded: boolean;

  constructor(
    private router: Router,
    private fileService: FileService,
    private currentQuizService: CurrentQuizService,
  ) { }

  ngOnInit() {
    this.quizLoaded = !!this.getCurrentQuiz();
  }

  goToCreateQuiz = () => {
    this.router.navigate(['/create-quiz']);
  }

  goToManageQuiz = () => {
    this.router.navigate(['/manage-quiz']);
  }

  openQuiz = () => {
    this.fileService.loadQuiz(this.onQuizLoaded);
  }

  onQuizLoaded = (quiz: Quiz) => {
    this.currentQuizService.storeQuiz(quiz);
    this.quizLoaded = true;
  }

  getCurrentQuiz = (): Quiz => {
    return this.currentQuizService.getQuiz();
  }
}

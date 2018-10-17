import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/fileService/file.service';
import { CurrentQuizService } from '../../services/currentQuizService/current-quiz.service';
import { Router } from '@angular/router';

import { Quiz } from '../../../types/quiz';

const QUIZ_CREATE_BASICS_VIEW = 'basics';
const QUIZ_CREATE_TOPICS_VIEW = 'create-topic';
const QUIZ_MIN_TOPICS_COUNT = 1;

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  public quiz: Quiz;

  private currentView: string;

  constructor(
    private fileService: FileService,
    private currentQuizService: CurrentQuizService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initializeEmptyQuiz();
    this.setView(QUIZ_CREATE_BASICS_VIEW);
  }

  initializeEmptyQuiz = () => {
    this.quiz = new Quiz;
    this.quiz.topics = [];
  }

  setView = (view: string) => {
    this.currentView = view;
  }

  displayCreateBasics = (): boolean => {
    return this.currentView === QUIZ_CREATE_BASICS_VIEW;
  }

  displayCreateTopics = (): boolean => {
    return this.currentView === QUIZ_CREATE_TOPICS_VIEW;
  }

  onQuizBasicsCreated = () => {
    this.setView(QUIZ_CREATE_TOPICS_VIEW);
  }

  createQuizDisabled = (): boolean => {
    return this.quiz.topics.length < QUIZ_MIN_TOPICS_COUNT;
  }

  createQuiz = () => {
    this.fileService.saveQuiz(this.quiz);
    this.currentQuizService.storeQuiz(this.quiz);
    this.router.navigate(['/main']);
  }
}

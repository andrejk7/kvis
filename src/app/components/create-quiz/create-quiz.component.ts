import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/fileService/file.service';

import { Quiz } from '../../../types/quiz';

const mockQuiz = {
  topics: [
    {
      name: 'trucks',
      questions: [
        {
          points: 10,
          question: 'Rubber Duck\'s truck?',
          answer: 'Mack'
        },
        {
          points: 20,
          question: 'Jerry Reed\'s truck?',
          answer: 'Kenworth w900'
        },
        {
          points: 30,
          question: 'Duel truck?',
          answer: 'Peterbilt 351'
        },
        {
          points: 40,
          question: 'Ugliest Ukrainian truck?',
          answer: 'KrAZ 255'
        },
        {
          points: 50,
          question: 'Dr. alcohol. Kolaroff concert truck?',
          answer: 'DAF XF'
        }
      ]
    },
  ]
};

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  public quiz: Quiz;

  constructor(
    private fileService: FileService,
  ) {}

  ngOnInit() {
    this.initializeEmptyQuiz();
  }

  initializeEmptyQuiz = () => {
    this.quiz = new Quiz;
    this.quiz.topics = [];
  }

  createQuiz = () => {
    this.fileService.saveQuiz(this.quiz);
  }
}

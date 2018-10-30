import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../../types/question';
import { CurrentQuestionService } from '../../services/currentQuestionService/current-question.service';

@Component({
  selector: 'app-question-preview',
  templateUrl: './question-preview.component.html',
  styleUrls: ['./question-preview.component.css']
})
export class QuestionPreviewComponent implements OnInit {
  @Input() question: Question;

  private topicId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private currentQuestionService: CurrentQuestionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.topicId = params.id;
    });
  }

  openManageQuestion = () => {
    this.currentQuestionService.setQuestion(this.question);
    this.router.navigate(['/manage-question']);
  }
}


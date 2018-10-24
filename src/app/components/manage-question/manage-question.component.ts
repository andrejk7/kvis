import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../../types/question';
import { CurrentQuizService } from '../../services/currentQuizService/current-quiz.service';

@Component({
  selector: 'app-manage-question',
  templateUrl: './manage-question.component.html',
  styleUrls: ['./manage-question.component.css']
})
export class ManageQuestionComponent implements OnInit, OnDestroy {
  public question: Question;

  private sub: any;
  private topicId: number;
  private questionId: number;

  constructor(
    private currentQuizService: CurrentQuizService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.topicId = +params['id'];
      this.questionId = +params['questionId'];
    });
    this.question = { ...this.currentQuizService.getQuestion(this.topicId, this.questionId) };
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save = () => {
    this.currentQuizService.updateQuestion(
      this.topicId,
      this.questionId,
      this.question,
    );
    this.goToManageTopic();
  }

  cancel = () => {
    this.goToManageTopic();
  }

  goToManageTopic = () => {
    this.router.navigate(['/manage-topic', this.topicId.toString()]);
  }
}

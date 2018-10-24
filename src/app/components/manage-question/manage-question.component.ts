import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../../types/question';
import { CurrentQuestionService } from '../../services/currentQuestionService/current-question.service';

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
    private currentQuestionService: CurrentQuestionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.topicId = +params['id'];
      this.questionId = +params['questionId'];
    });
    this.question = this.currentQuestionService.getQuestion();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save = () => {
    this.currentQuestionService.saveQuestion();
    this.goToManageTopic();
  }

  cancel = () => {
    this.goToManageTopic();
  }

  goToManageTopic = () => {
    this.router.navigate(['/manage-topic', this.topicId.toString()]);
  }
}

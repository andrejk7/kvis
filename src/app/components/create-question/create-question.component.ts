import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../../types/question';
import { CurrentQuizService } from '../../services/currentQuizService/current-quiz.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit, OnDestroy {
  public question: Question;

  private sub: any;
  private topicId: number;
  private defaultPoints: number;

  constructor(
    private currentQuizService: CurrentQuizService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.topicId = +params['id'];
      this.defaultPoints = +params['defaultPoints'];
    });
    this.initQuestion();
  }

  initQuestion = () => {
    this.question = new Question;
    this.question.points = this.defaultPoints;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save = () => {
    this.currentQuizService.addQuestion(
      this.topicId,
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

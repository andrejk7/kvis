import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../../types/question';
import { CreateQuestionService } from '../../services/createQuestionService/create-question.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit, OnDestroy {
  public question: Question;

  private sub: any;
  private defaultPoints: number;

  constructor(
    private createQuestionService: CreateQuestionService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
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
    this.createQuestionService.saveQuestion(this.question);
    this.goToManageTopic();
  }

  cancel = () => {
    this.goToManageTopic();
  }

  goToManageTopic = () => {
    this.router.navigate(['/manage-topic']);
  }

}

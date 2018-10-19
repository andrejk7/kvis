import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Topic } from '../../../types/topic';
import { CurrentQuizService } from '../../services/currentQuizService/current-quiz.service';

@Component({
  selector: 'app-manage-topic',
  templateUrl: './manage-topic.component.html',
  styleUrls: ['./manage-topic.component.css']
})
export class ManageTopicComponent implements OnInit, OnDestroy {
  public topic: Topic;

  private topicId: number;
  private sub: any;

  constructor(
    private currentQuizService: CurrentQuizService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.topicId = +params['id'];
    });
    this.topic = { ...this.currentQuizService.getTopic(this.topicId) };
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save = () => {
    this.currentQuizService.updateTopic(this.topicId, this.topic);
    this.goToManageQuiz();
  }

  cancel = () => {
    this.goToManageQuiz();
  }

  goToManageQuiz = () => {
    this.router.navigate(['/manage-quiz']);
  }
}

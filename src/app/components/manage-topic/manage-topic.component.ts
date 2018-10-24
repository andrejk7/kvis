import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Topic } from '../../../types/topic';
import { CurrentTopicService } from '../../services/currentTopicService/current-topic.service';

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
    private currentTopicService: CurrentTopicService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.topicId = +params['id'];
    });
    this.topic = this.currentTopicService.getTopic();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.currentTopicService.clearTopic();
  }

  save = () => {
    this.currentTopicService.saveTopic();
    this.goToManageQuiz();
  }

  cancel = () => {
    this.goToManageQuiz();
  }

  newQuestion = () => {
    const defaultPoints = (this.topic.questions.length + 1) * 10;

    this.router.navigate([
      '/manage-topic',
      this.topicId,
      'question',
      'new',
      defaultPoints,
    ]);
  }

  goToManageQuiz = () => {
    this.router.navigate(['/manage-quiz']);
  }
}

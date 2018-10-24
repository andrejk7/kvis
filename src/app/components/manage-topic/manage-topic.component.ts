import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from '../../../types/topic';
import { CurrentTopicService } from '../../services/currentTopicService/current-topic.service';

@Component({
  selector: 'app-manage-topic',
  templateUrl: './manage-topic.component.html',
  styleUrls: ['./manage-topic.component.css']
})
export class ManageTopicComponent implements OnInit {
  public topic: Topic;

  constructor(
    private currentTopicService: CurrentTopicService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.topic = this.currentTopicService.getTopic();
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
    this.router.navigate(['/create-question', defaultPoints]);
  }

  goToManageQuiz = () => {
    this.router.navigate(['/manage-quiz']);
  }
}

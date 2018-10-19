import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from '../../../types/topic';
import { ManageTopicService } from '../../services/manageTopicService/manage-topic.service';

@Component({
  selector: 'app-manage-topic',
  templateUrl: './manage-topic.component.html',
  styleUrls: ['./manage-topic.component.css']
})
export class ManageTopicComponent implements OnInit {
  public topic: Topic;

  constructor(
    private manageTopicService: ManageTopicService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.topic = this.manageTopicService.getTopic();
  }

  save = () => {
    this.manageTopicService.setManagedTopic(this.topic);
    this.goToManageQuiz();
  }

  cancel = () => {
    this.goToManageQuiz();
  }

  goToManageQuiz = () => {
    this.router.navigate(['/manage-quiz']);
  }
}

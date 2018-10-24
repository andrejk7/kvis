import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from '../../../types/topic';
import { CreateTopicService } from '../../services/createTopicService/create-topic.service';


@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {
  public topic: Topic;

  constructor(
    private createTopicService: CreateTopicService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initializeTopic();
  }

  initializeTopic = () => {
    this.topic = new Topic();
    this.topic.questions = [];
  }

  createTopic = () => {
    this.createTopicService.saveTopic(this.topic);
    this.router.navigate(['/manage-topic']);
  }

  cancel = () => {
    this.goToManageQuiz();
  }

  goToManageQuiz = () => {
    this.router.navigate(['/manage-quiz']);
  }
}

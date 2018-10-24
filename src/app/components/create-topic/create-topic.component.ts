import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from '../../../types/topic';
import { CurrentQuizService } from '../../services/currentQuizService/current-quiz.service';


@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {
  public topic: Topic;

  constructor(
    private currentQuizService: CurrentQuizService,
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
    const topic = this.currentQuizService.addTopic(this.topic);
    this.router.navigate(['/manage-topic']);
  }

  cancel = () => {
    this.goToManageQuiz();
  }

  goToManageQuiz = () => {
    this.router.navigate(['/manage-quiz']);
  }
}

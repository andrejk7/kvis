import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from '../../../types/topic';
import { CurrentTopicService } from '../../services/currentTopicService/current-topic.service';

@Component({
  selector: 'app-topic-preview',
  templateUrl: './topic-preview.component.html',
  styleUrls: ['./topic-preview.component.css']
})
export class TopicPreviewComponent {
  @Input() topic: Topic;

  constructor(
    private router: Router,
    private currentTopicService: CurrentTopicService,
  ) { }

  private displayQuestions: boolean;

  toggleDisplayQuestions = () => {
    this.displayQuestions = !this.displayQuestions;
  }

  shouldDisplayQuestions = (): boolean => {
    return this.displayQuestions;
  }

  openManageTopic = () => {
    this.currentTopicService.setTopic(this.topic);
    this.router.navigate(['/manage-topic', this.topic.id]);
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from '../../../types/topic';
import { ManageTopicService } from '../../services/manageTopicService/manage-topic.service';

@Component({
  selector: 'app-topic-preview',
  templateUrl: './topic-preview.component.html',
  styleUrls: ['./topic-preview.component.css']
})
export class TopicPreviewComponent {
  @Input() topic: Topic;

  constructor(
    private manageTopicService: ManageTopicService,
    private router: Router,
  ) { }

  private displayQuestions: boolean;

  toggleDisplayQuestions = () => {
    this.displayQuestions = !this.displayQuestions;
  }

  shouldDisplayQuestions = (): boolean => {
    return this.displayQuestions;
  }

  openManageTopic = () => {
    this.manageTopicService.setManagedTopic(this.topic);
    this.router.navigate(['/manage-topic']);
  }
}

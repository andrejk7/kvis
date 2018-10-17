import { Component, Input } from '@angular/core';
import { Topic } from '../../../types/topic';

@Component({
  selector: 'app-topic-preview',
  templateUrl: './topic-preview.component.html',
  styleUrls: ['./topic-preview.component.css']
})
export class TopicPreviewComponent {
  @Input() topic: Topic;

  private displayQuestions: boolean;

  toggleDisplayQuestions = () => {
    this.displayQuestions = !this.displayQuestions;
  }

  shouldDisplayQuestions = (): boolean => {
    return this.displayQuestions;
  }
}

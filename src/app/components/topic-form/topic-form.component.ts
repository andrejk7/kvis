import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../../../types/quiz';
import { Topic } from '../../../types/topic';

const MIN_TOPIC_QUESTIONS_COUNT = 5;

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent implements OnInit {
  @Input() quiz: Quiz;

  public topic: Topic;

  ngOnInit() {
    this.initializeTopic();
  }

  initializeTopic = () => {
    // dystopic axexexe
    this.topic = new Topic;
    this.topic.questions = [];
  }

  addTopicDisabled = (): boolean => {
    return this.topic.questions.length < MIN_TOPIC_QUESTIONS_COUNT;
  }

  submitTopic = () => {
    this.quiz.topics.push(this.topic);
    this.initializeTopic();
  }
}

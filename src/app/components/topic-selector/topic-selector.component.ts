import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../../types/topic';
import { RefMapper } from '../../common/refMapper';

@Component({
  selector: 'app-topic-selector',
  templateUrl: './topic-selector.component.html',
  styleUrls: ['./topic-selector.component.css']
})
export class TopicSelectorComponent implements OnInit {
  @Input() topics: Array<Topic>;
  @Input() selectedTopicsIds: Array<number>;

  constructor() { }

  ngOnInit() {
  }

  onToggleTopicSelected = (selected: boolean, id: number) => {
    selected ? this.removeTopicFromSelected(id) : this.addTopicToSelected(id);
  }

  addTopicToSelected = (id: number) => {
    this.selectedTopicsIds.push(id);
  }

  removeTopicFromSelected = (id: number) => {
    const index = this.selectedTopicsIds.indexOf(id);
    this.selectedTopicsIds.splice(index, 1);
  }
}

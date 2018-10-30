import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from '../../../types/topic';

@Component({
  selector: 'app-topic-selector-item',
  templateUrl: './topic-selector-item.component.html',
  styleUrls: ['./topic-selector-item.component.css']
})
export class TopicSelectorItemComponent implements OnInit {
  @Input() topic: Topic;
  @Output() toggleSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  public selected: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleSelect = () => {
    this.selected = !this.selected;
    this.toggleSelected.emit(this.selected);
  }

}

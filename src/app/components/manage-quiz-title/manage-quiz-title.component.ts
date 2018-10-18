import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from '../../../types/quiz';

@Component({
  selector: 'app-manage-quiz-title',
  templateUrl: './manage-quiz-title.component.html',
  styleUrls: ['./manage-quiz-title.component.css']
})
export class ManageQuizTitleComponent implements OnInit {
  @Input() quiz: Quiz;

  private editing: boolean;
  private editedTitle: string;

  constructor() { }

  ngOnInit() {

  }

  edit = () => {
    this.editedTitle = this.quiz.name;
    this.editing = true;
  }

  changeName = () => {
    this.quiz.name = this.editedTitle;
    this.editing = false;
  }

  cancelEditing = () => {
    this.editing = false;
  }
}

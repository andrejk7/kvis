import { Component, Input } from '@angular/core';
import { Named } from '../../../types/named';

@Component({
  selector: 'app-manage-name',
  templateUrl: './manage-name.component.html',
  styleUrls: ['./manage-name.component.css']
})
export class ManageNameComponent {
  @Input() named: Named;

  private editing: boolean;
  private editedTitle: string;

  edit = () => {
    this.editedTitle = this.named.name;
    this.editing = true;
  }

  changeName = () => {
    this.named.name = this.editedTitle;
    this.editing = false;
  }

  cancelEditing = () => {
    this.editing = false;
  }
}

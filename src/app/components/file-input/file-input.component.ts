import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent {
 @Input() disabled: boolean;
 @Input() placeholder: string;
 @Output() onFileSelected: EventEmitter<File> = new EventEmitter<File>();

  onChange = (files: any) => {
    this.onFileSelected.emit(files[0]);
  }
}

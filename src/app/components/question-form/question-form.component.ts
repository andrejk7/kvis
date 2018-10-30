import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../../types/question';
import { Topic } from '../../../types/topic';
import { FileEncodingService } from '../../services/fileEncodingService/file-encoding.service';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  @Input() question: Question;
  @Output() submitted: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelled: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fileEncodingService: FileEncodingService,
  ) { }

  public questionImage: File;
  private encodingQuestionImage: boolean;
  private finishedEncodingQuestionImage: boolean;

  public answerImage: File;
  private encodingAnswerImage: boolean;
  private finishedEncodingAnswerImage: boolean;

  submitQuestion = (event: any) => {
    event.preventDefault();
    this.encodeImages();
  }

  encodeImages = () => {
    this.encodeQuestionImage();
    this.encodeAnswerImage();
  }

  encodeQuestionImage = () => {
    if (!this.questionImage) {
      this.finishedEncodingQuestionImage = true;
      return this.finishedEncodingImages();
    }
    this.encodingQuestionImage = true;
    this.fileEncodingService.generateDataUrl(this.questionImage, this.onQuestionImageEncoded);
  }

  onQuestionImageEncoded = (dataUrl: string) => {
    this.question.questionImageEncoded = dataUrl;
    this.encodingQuestionImage = false;
    this.finishedEncodingQuestionImage = true;
    this.finishedEncodingImages();
  }

  encodeAnswerImage = () => {
    if (!this.answerImage) {
      this.finishedEncodingAnswerImage = true;
      return this.finishedEncodingImages();
    }
    this.encodingAnswerImage = true;
    this.fileEncodingService.generateDataUrl(this.answerImage, this.onAnswerImageEncoded);
  }

  onAnswerImageEncoded = (dataUrl: string) => {
    this.question.answerImageEncoded = dataUrl;
    this.encodingAnswerImage = false;
    this.finishedEncodingAnswerImage = true;
    this.finishedEncodingImages();
  }

  finishedEncodingImages = () => {
    if (!this.finishedEncodingAnswerImage || !this.finishedEncodingQuestionImage) { return; }
    this.submitted.emit();
  }

  cancel = () => {
    this.cancelled.emit();
  }

  formDisabled = (): boolean => {
    return this.encodingQuestionImage || this.encodingAnswerImage;
  }
}

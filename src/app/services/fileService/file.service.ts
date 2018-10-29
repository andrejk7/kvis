import { Injectable, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { Quiz } from '../../../types/quiz';
import { AppSyncEvent } from '../../../types/appEvents';

@Injectable()

export class FileService {
  private quizLoadedCallback: Function;

  constructor(
    private _electronService: ElectronService,
    private zone: NgZone,
  ) {
    this.bindProcessEvents();
  }

  bindProcessEvents = () => {
    this._electronService.ipcRenderer.on('onQuizLoaded', (event, arg) => this.onQuizLoaded(arg));
  }

  saveQuiz = (quiz: Quiz) => {
    const event = new AppSyncEvent;
    event.type = 'saveQuiz';
    event.payload = quiz;
    this._electronService.ipcRenderer.send('saveQuiz', event);
  }

  loadQuiz = (loadedCallback: Function) => {
    this.quizLoadedCallback = loadedCallback;

    const event = new AppSyncEvent;
    event.type = 'loadQuiz';
    this._electronService.ipcRenderer.send('loadQuiz', event);
  }

  onQuizLoaded = (data: string) => {
    this.zone.run(() => {
      if (!this.quizLoadedCallback) { return; }
      const quiz = <Quiz>JSON.parse(data);
      this.quizLoadedCallback(quiz);
      this.quizLoadedCallback = null;
    });
  }
}

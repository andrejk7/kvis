import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { Quiz } from '../../../types/quiz';
import { AppSyncEvent } from '../../../types/appEvents';

@Injectable()

export class FileService {

  constructor(private _electronService: ElectronService) { }

  saveQuiz = (quiz: Quiz) => {
    const event = new AppSyncEvent;
    event.type = 'saveQuiz';
    event.payload = quiz;
    this._electronService.ipcRenderer.send('sync', event);
  }
}

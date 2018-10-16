import { Injectable } from '@angular/core';
import {ElectronService} from 'ngx-electron';

import { Quiz } from '../../../types/quiz';

@Injectable()

export class FileService {

  constructor(private _electronService: ElectronService) { }

  saveQuiz = (quiz: Quiz) => {
    console.log(quiz);
  }
}

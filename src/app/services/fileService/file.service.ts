import { Injectable } from '@angular/core';
import {ElectronService} from 'ngx-electron';

@Injectable()

export class FileService {

  constructor(private _electronService: ElectronService) { }

  saveFile = () => {
    console.log(this._electronService.ipcRenderer);
  }
}

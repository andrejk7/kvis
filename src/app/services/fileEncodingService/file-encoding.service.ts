import { Injectable } from '@angular/core';

@Injectable()
export class FileEncodingService {
  generateDataUrl = (file: File, callback: Function) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
  }
}

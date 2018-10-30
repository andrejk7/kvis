import { Injectable } from '@angular/core';

@Injectable()
export class FileEncodingService {
  generateDataUrl = (file: File, callback: Function) => {
    const reader = new FileReader();
    reader.onload = () => callback(reader.result);
    reader.readAsDataURL(file);
  }
}

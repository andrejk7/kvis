import { Injectable } from '@angular/core';

@Injectable()
export class FileEncodingService {
  generateDataUrl = (file: File, callback: Function) => {
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => callback(reader.result);
    reader.readAsDataURL(file);
  }
}

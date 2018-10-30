import { Injectable } from '@angular/core';

const CU_SE_KACIM_VIDEO = '';

@Injectable()
export class CuSeKacimService {

  getVideo = (): string => {
    return CU_SE_KACIM_VIDEO;
  }

}

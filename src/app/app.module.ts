import { BrowserModule } from '@angular/platform-browser';
import {NgxElectronModule} from 'ngx-electron';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { FileService } from './services/fileService/file.service';
import { FileEncodingService } from './services/fileEncodingService/file-encoding.service';

import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';
import { CuSeKacimComponent } from './components/cu-se-kacim/cu-se-kacim.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterScreenComponent,
    CuSeKacimComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgxElectronModule,
    FormsModule,
  ],
  providers: [
    FileService,
    FileEncodingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

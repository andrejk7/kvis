import { BrowserModule } from '@angular/platform-browser';
import {NgxElectronModule} from 'ngx-electron';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { FileService } from './services/fileService/file.service';
import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { CuSeKacimComponent } from './components/cu-se-kacim/cu-se-kacim.component';
import { NewQuestionFormComponent } from './components/new-question-form/new-question-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterScreenComponent,
    MainScreenComponent,
    CreateQuizComponent,
    CuSeKacimComponent,
    NewQuestionFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgxElectronModule
  ],
  providers: [
    FileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

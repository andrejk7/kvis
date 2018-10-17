import { BrowserModule } from '@angular/platform-browser';
import {NgxElectronModule} from 'ngx-electron';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { FileService } from './services/fileService/file.service';
import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { CuSeKacimComponent } from './components/cu-se-kacim/cu-se-kacim.component';
import { NewQuestionFormComponent } from './components/new-question-form/new-question-form.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { NewTopicFormComponent } from './components/new-topic-form/new-topic-form.component';
import { NewQuizFormComponent } from './components/new-quiz-form/new-quiz-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterScreenComponent,
    MainScreenComponent,
    CreateQuizComponent,
    CuSeKacimComponent,
    NewQuestionFormComponent,
    CreateTopicComponent,
    NewTopicFormComponent,
    NewQuizFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgxElectronModule,
    FormsModule,
  ],
  providers: [
    FileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import {NgxElectronModule} from 'ngx-electron';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { FileService } from './services/fileService/file.service';
import { CurrentQuizService } from './services/currentQuizService/current-quiz.service';
import { ManageTopicService } from './services/manageTopicService/manage-topic.service';

import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { CuSeKacimComponent } from './components/cu-se-kacim/cu-se-kacim.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { QuestionPreviewComponent } from './components/question-preview/question-preview.component';
import { TopicPreviewComponent } from './components/topic-preview/topic-preview.component';
import { QuizPreviewComponent } from './components/quiz-preview/quiz-preview.component';
import { QuizBasicsFormComponent } from './components/quiz-basics-form/quiz-basics-form.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { TopicFormComponent } from './components/topic-form/topic-form.component';
import { ManageQuizComponent } from './components/manage-quiz/manage-quiz.component';
import { ManageNameComponent } from './components/manage-name/manage-name.component';
import { ManageTopicComponent } from './components/manage-topic/manage-topic.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterScreenComponent,
    MainScreenComponent,
    CreateQuizComponent,
    CuSeKacimComponent,
    CreateTopicComponent,
    QuestionPreviewComponent,
    TopicPreviewComponent,
    QuizPreviewComponent,
    QuizBasicsFormComponent,
    QuestionFormComponent,
    TopicFormComponent,
    ManageQuizComponent,
    ManageNameComponent,
    ManageTopicComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgxElectronModule,
    FormsModule,
  ],
  providers: [
    FileService,
    CurrentQuizService,
    ManageTopicService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

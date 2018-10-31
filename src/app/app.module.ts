import { BrowserModule } from '@angular/platform-browser';
import {NgxElectronModule} from 'ngx-electron';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { FileService } from './services/fileService/file.service';
import { FileEncodingService } from './services/fileEncodingService/file-encoding.service';
import { PlayQuizService } from './services/playQuizService/play-quiz.service';

import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';
import { CuSeKacimComponent } from './components/cu-se-kacim/cu-se-kacim.component';
import { PlayQuizComponent } from './components/play-quiz/play-quiz.component';
import { PlayRoundComponent } from './components/play-round/play-round.component';
import { PlayQuestionComponent } from './components/play-question/play-question.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';
import { AnswerViewComponent } from './components/answer-view/answer-view.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterScreenComponent,
    CuSeKacimComponent,
    PlayQuizComponent,
    PlayRoundComponent,
    PlayQuestionComponent,
    QuestionViewComponent,
    AnswerViewComponent,
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
    PlayQuizService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

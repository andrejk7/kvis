import { Routes } from '@angular/router';

import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { ManageQuizComponent } from './components/manage-quiz/manage-quiz.component';
import { ManageTopicComponent } from './components/manage-topic/manage-topic.component';
import { ManageQuestionComponent } from './components/manage-question/manage-question.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';

export const appRoutes: Routes = [
  { path: '', component: EnterScreenComponent},
  { path: 'main', component: MainScreenComponent},
  { path: 'create-quiz', component: CreateQuizComponent},
  { path: 'manage-quiz', component: ManageQuizComponent},
  { path: 'manage-topic/:id', component: ManageTopicComponent },
  { path: 'manage-topic/:id/question/:questionId', component: ManageQuestionComponent },
  { path: 'manage-topic/:id/question/new/:defaultPoints', component: CreateQuestionComponent },
];

import { Routes } from '@angular/router';

import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { ManageQuizComponent } from './components/manage-quiz/manage-quiz.component';
import { ManageTopicComponent } from './components/manage-topic/manage-topic.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { ManageQuestionComponent } from './components/manage-question/manage-question.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { CuSeKacimComponent } from './components/cu-se-kacim/cu-se-kacim.component';
import { ManageRoundComponent } from './components/manage-round/manage-round.component';

export const appRoutes: Routes = [
  { path: '', component: EnterScreenComponent},
  { path: 'main', component: MainScreenComponent},
  { path: 'create-quiz', component: CreateQuizComponent},
  { path: 'manage-quiz', component: ManageQuizComponent},
  { path: 'manage-topic', component: ManageTopicComponent },
  { path: 'manage-question', component: ManageQuestionComponent },
  { path: 'manage-rounds', component: ManageRoundComponent },
  { path: 'create-question/:defaultPoints', component: CreateQuestionComponent },
  { path: 'create-topic', component: CreateTopicComponent },
  { path: 'cu-se-kacim', component: CuSeKacimComponent },
];

import { Routes } from '@angular/router';

import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { ManageQuizComponent } from './components/manage-quiz/manage-quiz.component';

export const appRoutes: Routes = [
  { path: '', component: EnterScreenComponent},
  { path: 'main', component: MainScreenComponent},
  { path: 'create-quiz', component: CreateQuizComponent},
  { path: 'manage-quiz', component: ManageQuizComponent},
];

import { Routes } from '@angular/router';

import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';
import { CuSeKacimComponent } from './components/cu-se-kacim/cu-se-kacim.component';

export const appRoutes: Routes = [
  { path: '', component: EnterScreenComponent},
  { path: 'cu-se-kacim', component: CuSeKacimComponent },
];

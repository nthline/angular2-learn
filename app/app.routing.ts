import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './home.component';
import { ScienceComponent }      from './science.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'science',
    component: ScienceComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ForYouComponent } from './foryou/foryou.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: MainComponent },
  { path: 'foryou', component: ForYouComponent},
  { path: '**', component: MainComponent}
];

export const routing = RouterModule.forRoot(routes);

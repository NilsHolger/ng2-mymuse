import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ForYouComponent } from './foryou/foryou.component';
import { WeAreAngularComponent } from './weareangular/weareangular.component';
import { OurSuperPowersComponent } from './oursuperpowers/oursuperpowers.component';
import { VictoryComponent } from './victory/victory.component';
import { RewardComponent } from './reward/reward.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: MainComponent },
  { path: 'foryou', component: ForYouComponent },
  { path: 'weareangular', component: WeAreAngularComponent },
  { path: 'oursuperpowers', component: OurSuperPowersComponent },
  { path: 'ngvictory', component: VictoryComponent },
  { path: 'reward', component: RewardComponent},
  { path: '**', component: MainComponent }
];

export const routing = RouterModule.forRoot(routes);

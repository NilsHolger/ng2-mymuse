import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ForYouComponent } from './foryou/foryou.component';
import { WeAreAngularComponent } from './weareangular/weareangular.component';
import { OurSuperPowersComponent } from './oursuperpowers/oursuperpowers.component';
import { VictoryComponent } from './victory/victory.component';
import { RewardComponent } from './reward/reward.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ForYouComponent,
    WeAreAngularComponent,
    OurSuperPowersComponent,
    VictoryComponent,
    RewardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

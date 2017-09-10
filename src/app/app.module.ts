import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsermatchComponent } from './usermatch/usermatch';
import { SteamFriends } from './steamFriends/steamFriends';
import { MyFilterPipe } from './filter/MyFilterPiple';

import { TestComponent } from './test/test';
import { TestDetailComponent } from './test/test-detail';

@NgModule({
  declarations: [
    AppComponent,
    UsermatchComponent,
    SteamFriends,
    MyFilterPipe,
    TestComponent,
    TestDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

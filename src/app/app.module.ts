import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { DummyComponent } from './dummy/dummy.component';

import { BasicHighlightDirective } from './directives/basichighlight.directive';
import { BetterHighlightDirective } from './directives/better/betterhighlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { TweetService } from './services/tweet.service';
import { TweetComponent } from './tweet/tweet.component';
import { ShowComponent } from './tweet/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    DummyComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TweetComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

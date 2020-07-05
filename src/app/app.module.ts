import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BasicHighlightDirective } from '../app/basic-highlight/basic-highlight.directive'


import { AppComponent } from './app.component';
import { BetterHighlightDirective } from '../app/better-highlight/better-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

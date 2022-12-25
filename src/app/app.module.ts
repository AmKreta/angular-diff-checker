import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DiffDisplayComponent } from './components/diff-display/diff-display.component';
import { IconLinksComponent } from './components/icon-links/icon-links.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    DiffDisplayComponent,
    IconLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

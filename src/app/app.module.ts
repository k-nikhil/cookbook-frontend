import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddReceipeComponent } from './components/add-receipe/add-receipe.component';
import { DetailReceipeComponent } from './components/detail-receipe/detail-receipe.component';
import { ListReceipeComponent } from './components/list-receipe/list-receipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AddReceipeComponent,
    DetailReceipeComponent,
    ListReceipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

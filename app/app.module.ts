import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing }        from './app.routing';

import { HomeComponent }      from './home.component';
import { ScienceComponent }   from './science.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing],
  declarations: [ AppComponent, ScienceComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

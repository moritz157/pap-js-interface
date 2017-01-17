import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { AppComponent }   from './app.component';
import { PapCalculatorService } from './pap-calculator.service'

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent
  ],
  providers: [ PapCalculatorService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

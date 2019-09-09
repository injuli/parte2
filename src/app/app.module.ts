import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoolSelectComponent } from './cool-select/cool-select.component';
import { MoneyInputComponent } from './money-input/money-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CoolSelectComponent,
    MoneyInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

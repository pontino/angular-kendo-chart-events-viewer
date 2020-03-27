import { NgModule }      from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import 'hammerjs';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ FormsModule, BrowserModule, BrowserAnimationsModule, ChartsModule, DropDownsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

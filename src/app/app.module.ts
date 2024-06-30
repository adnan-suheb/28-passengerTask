import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PassengerDashComponent } from './shared/component/passenger-dash/passenger-dash.component';
import { PassengerListComponent } from './shared/component/passenger-list/passenger-list.component';
import { PassengerCardComponent } from './shared/component/passenger-card/passenger-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDashComponent,
    PassengerListComponent,
    PassengerCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

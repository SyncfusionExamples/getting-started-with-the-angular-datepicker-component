import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DatePickerModule, MaskedDateTimeService} from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DatePickerModule
  ],
  providers: [MaskedDateTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

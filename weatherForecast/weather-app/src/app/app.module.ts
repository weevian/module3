import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }from '@angular/common/http';
import { HttpService } from './http.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDaysComponent } from './weather-days/weather-days.component';
import {FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    WeatherDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

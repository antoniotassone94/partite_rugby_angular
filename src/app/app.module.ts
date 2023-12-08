import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MainComponent} from "./components/main/main.component";
import {Errore404Component} from "./components/errore404/errore404.component";
import {CalendarioPartiteComponent} from "./components/calendariopartite/calendariopartite.component";
import {GiornataCalendarioComponent} from "./components/giornatacalendario/giornatacalendario.component";

import {GetCalendarioPartiteService} from "./services/getcalendariopartite.service";
import {HttpRequestService} from "./services/httprequest.service";

@NgModule({
  declarations: [
    MainComponent,
    Errore404Component,
    CalendarioPartiteComponent,
    GiornataCalendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    GetCalendarioPartiteService,
    HttpRequestService
  ],
  bootstrap: [MainComponent]
})

export class AppModule{}

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomepageComponent} from "./componenti/homepage/homepage.component";
import {Errore404Component} from "./componenti/errore404/errore404.component";
import {CalendariopartiteComponent} from "./componenti/calendariopartite/calendariopartite.component";
import {GiornatacalendarioComponent} from "./componenti/giornatacalendario/giornatacalendario.component";

@NgModule({
  declarations: [
    HomepageComponent,
    Errore404Component,
    CalendariopartiteComponent,
    GiornatacalendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [HomepageComponent]
})

export class AppModule{}

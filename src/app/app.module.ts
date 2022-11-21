import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {HomepageComponent} from "./componenti/homepage/homepage.component";
import {Errore404Component} from "./componenti/errore404/errore404.component";
import {ElencopartiteComponent} from "./componenti/elencopartite/elencopartite.component";
import {SingolapartitaComponent} from "./componenti/singolapartita/singolapartita.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Errore404Component,
    ElencopartiteComponent,
    SingolapartitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}

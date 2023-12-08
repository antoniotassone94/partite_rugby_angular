import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import {CalendarioPartiteComponent} from "./components/calendariopartite/calendariopartite.component";
import {Errore404Component} from "./components/errore404/errore404.component";

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"/calendariopartite"},
  {path:"calendariopartite",component:CalendarioPartiteComponent},
  {path:"404",component:Errore404Component},
  {path:"**",redirectTo:"/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

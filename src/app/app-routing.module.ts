import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import {CalendariopartiteComponent} from "./componenti/calendariopartite/calendariopartite.component";
import {Errore404Component} from "./componenti/errore404/errore404.component";

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"/homepage"},
  {path:"homepage",component:CalendariopartiteComponent},
  {path:"404",component:Errore404Component},
  {path:"**",redirectTo:"/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

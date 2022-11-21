import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {Errore404Component} from "./componenti/errore404/errore404.component";

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"/homepage"},
  {path:"homepage",component:AppComponent},
  {path:"404",component:Errore404Component},
  {path:"**",redirectTo:"/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

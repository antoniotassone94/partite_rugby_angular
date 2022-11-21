import {Component} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent{
  private title:string = "Calendario partite di rugby";

  constructor(){}

  public getTitle():string{
    return this.title;
  }
}

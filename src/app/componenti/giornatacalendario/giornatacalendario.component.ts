import {Component,Input,OnInit} from "@angular/core";
import {match} from "src/app/interfacce/match";

@Component({
  selector: "app-giornatacalendario",
  templateUrl: "./giornatacalendario.component.html",
  styleUrls: ["./giornatacalendario.component.css"]
})

export class GiornatacalendarioComponent implements OnInit {
  @Input() date:string = "";
  @Input() matches:match[] = [];

  constructor(){}

  ngOnInit():void{
    for (let i:number = 0; i < this.matches.length; i++) {
      let match = this.matches[i];
      for (let j:number = 0; j < match.teams.length; j++) {
        let team = match.teams[j];
        team.color = "rgb(" + team.color + ")";
        team.logo = "assets/images/" + team.logo;
        team.themeImage = "url('assets/images/" + team.themeImage + ".png')";
        team.conference = "(" + team.conference + ")";
      }
    }
  }
}

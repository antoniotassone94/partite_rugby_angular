import {Component,OnInit} from "@angular/core";
import {calendarMatches} from "src/app/interfacce/calendarMatches";
import {GetelencopartiteService} from "src/app/servizi/getelencopartite.service";

@Component({
  selector:"app-elencopartite",
  templateUrl:"./elencopartite.component.html",
  styleUrls: ["./elencopartite.component.css"]
})

export class ElencopartiteComponent implements OnInit {
  public elencoPartite = {};
  public elencoPartiteArray:calendarMatches[][] = [];

  constructor(private elencoPartiteServizio:GetelencopartiteService){}

  ngOnInit():void{
    this.elencoPartiteServizio.getElencoPartite().subscribe(
      (dati:any) => {
        this.elencoPartite = dati;
        this.elencoPartiteArray = Object.values<calendarMatches[]>(this.elencoPartite);
      }
    );
  }
}

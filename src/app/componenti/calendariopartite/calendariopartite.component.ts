import {Component,OnInit} from "@angular/core";
import {calendarMatches} from "src/app/interfacce/calendarMatches";
import {GetcalendariopartiteService} from "src/app/servizi/getcalendariopartite.service";

@Component({
  selector:"app-calendariopartite",
  templateUrl:"./calendariopartite.component.html",
  styleUrls: ["./calendariopartite.component.css"]
})

export class CalendariopartiteComponent implements OnInit {
  public calendariopartite = {};
  public calendariopartitearray:calendarMatches[][] = [];

  constructor(private calendariopartiteServizio:GetcalendariopartiteService){}

  ngOnInit():void{
    this.calendariopartiteServizio.getCalendarioPartite().subscribe(
      (dati:any) => {
        this.calendariopartite = dati;
        this.calendariopartitearray = Object.values<calendarMatches[]>(this.calendariopartite);
      }
    );
  }
}

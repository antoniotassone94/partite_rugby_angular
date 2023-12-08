import {Component,OnInit} from "@angular/core";
import {CalendarMatchesModel} from "../../models/calendarmatches.model";
import {GetCalendarioPartiteService} from "../../services/getcalendariopartite.service";

@Component({
  selector:"app-calendariopartite",
  templateUrl:"./calendariopartite.component.html",
  styleUrl: "./calendariopartite.component.css"
})

export class CalendarioPartiteComponent implements OnInit{
  public calendariopartite = {};
  public calendariopartitearray:CalendarMatchesModel[][] = [];

  constructor(private calendariopartiteServizio:GetCalendarioPartiteService){}

  public ngOnInit():void{
    this.calendariopartiteServizio.getCalendarioPartite().subscribe(
      (dati:any) => {
        this.calendariopartite = dati;
        this.calendariopartitearray = Object.values<CalendarMatchesModel[]>(this.calendariopartite);
      }
    );
  }
}

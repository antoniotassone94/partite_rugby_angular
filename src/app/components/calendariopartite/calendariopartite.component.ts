import {Component,OnInit,inject} from "@angular/core";
import {CalendarMatchesModel} from "../../models/calendarmatches.model";
import {GetCalendarioPartiteService} from "../../services/getcalendariopartite.service";

@Component({
  selector:"app-calendariopartite",
  templateUrl:"./calendariopartite.component.html",
  styleUrl: "./calendariopartite.component.css"
})

export class CalendarioPartiteComponent implements OnInit{
  private _calendariopartite:CalendarMatchesModel[];
  private getcalendarioservice:GetCalendarioPartiteService;

  constructor(){
    this._calendariopartite = [];
    this.getcalendarioservice = inject(GetCalendarioPartiteService);
  }

  public get calendariopartite():CalendarMatchesModel[]{
    return this._calendariopartite;
  }

  public ngOnInit():void{
    this.getcalendarioservice.getCalendarioPartite().subscribe({
      next: (dati:any) => {
        this._calendariopartite = Object.values<CalendarMatchesModel[]>(dati)[0];
      }
    });
  }
}

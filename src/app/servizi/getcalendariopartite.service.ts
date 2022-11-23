import {Injectable} from "@angular/core";
import {RichiesteserverService} from "./richiesteserver.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn:"root"
})

export class GetcalendariopartiteService {
  constructor(private richiesteserver:RichiesteserverService){}

  public getCalendarioPartite():Observable<Object>{
    return this.richiesteserver.effettuaRichiesta("assets/matches.json");
  }
}

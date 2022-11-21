import {Injectable} from "@angular/core";
import {RichiesteserverService} from "./richiesteserver.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn:"root"
})

export class GetelencopartiteService {
  constructor(private richiesteserver:RichiesteserverService){}

  public getElencoPartite():Observable<Object>{
    return this.richiesteserver.effettuaRichiesta("assets/matches.json");
  }
}

import {Injectable,inject} from "@angular/core";
import {HttpRequestService} from "./httprequest.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn:"root"
})

export class GetCalendarioPartiteService{
  private httprequest:HttpRequestService;

  constructor(){
    this.httprequest = inject(HttpRequestService);
  }

  public getCalendarioPartite():Observable<Object>{
    return this.httprequest.httpGetRequest("assets/matches.json");
  }
}

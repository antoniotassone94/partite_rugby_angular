import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn:"root"
})

export class HttpRequestService{
  constructor(private http:HttpClient){}

  public httpGetRequest(url:string):Observable<Object>{
    return this.http.get<Object>(url);
  }
}

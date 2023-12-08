import {MatchModel} from "./match.model";

export class CalendarMatchesModel{
    private _date:string;
    private _matches:MatchModel[];

    constructor(){
        this._date = "";
        this._matches = [];
    }

    public get date():string{
        return this._date;
    }

    public set date(value:string){
        this._date = value;
    }

    public get matches():MatchModel[]{
        return this._matches;
    }

    public set matches(value:MatchModel[]){
        this._matches = value;
    }
}
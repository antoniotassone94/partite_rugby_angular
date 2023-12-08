import {TeamModel} from "./team.model";

export class MatchModel{
  private _place:string;
  private _type:string;
  private _teams:TeamModel[];

  constructor(){
    this._place = "";
    this._type = "";
    this._teams = [];
  }

  public get place():string{
    return this._place;
  }

  public set place(value:string){
    this._place = value;
  }

  public get type():string{
    return this._type;
  }

  public set type(value:string){
    this._type = value;
  }

  public get teams():TeamModel[]{
    return this._teams;
  }

  public set teams(value:TeamModel[]){
    this._teams = value;
  }
}
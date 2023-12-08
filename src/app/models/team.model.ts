export class TeamModel{
    private _name:string;
    private _score:number;
    private _conference:string;
    private _position:number;
    private _logo:string;
    private _color:string;
    private _themeImage:string;

    constructor(){
        this._name = "";
        this._score = 0;
        this._conference = "";
        this._position = 0;
        this._logo = "";
        this._color = "";
        this._themeImage = "";
    }

    public get name():string{
        return this._name;
    }

    public set name(value:string){
        this._name = value;
    }

    public get score():number{
        return this._score;
    }

    public set score(value:number){
        this._score = value;
    }

    public get conference():string{
        return this._conference;
    }

    public set conference(value:string){
        this._conference = value;
    }

    public get position():number{
        return this._position;
    }

    public set position(value:number){
        this._position = value;
    }

    public get logo():string{
        return this._logo;
    }

    public set logo(value:string){
        this._logo = value;
    }

    public get color():string{
        return this._color;
    }

    public set color(value:string){
        this._color = value;
    }

    public get themeImage():string{
        return this._themeImage;
    }

    public set themeImage(value:string){
        this._themeImage = value;
    }
}
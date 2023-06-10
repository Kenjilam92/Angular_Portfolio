export class TableTitle {
    public displayName:string;
    public variableName:string;
    public clicked?: any;
    public hovered?: any;
    public other?:any;
    
    constructor(input : Record<string,any>){
        this.displayName= (input['displayName']?input['displayName']:"")
        this.variableName= (input['variableName']?input['variableName']:"")
        this.clicked= (input['clicked']?input['clicked']:null);
        this.hovered= (input['hovered']?input['hovered']:null);
        this.other= (input['other']?input['other']:"");
    }
}

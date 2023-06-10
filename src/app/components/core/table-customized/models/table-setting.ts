import { TableTitle } from "./table-title";

export class TableSetting {
    public titles?: TableTitle[];
    public data?: any[];
    public tableClass?: string;
    public theadClass?: string;
    public tbodyClass?: string;
    public trClass?: string;
    public thClass?: string;
    public tdClass?: string;
    public thClicked?: any;
    public tdClicked?: any;
    public thHovered?: any;
    public tdHovered?: any;
    public trHovered?: any;

    constructor (input : Record<string,any>){
        this.titles = input['titles']?input['titles']:[];
        this.data = input['data']?input['data']:[];
        this.tableClass = input['tableClass']?input['tableClass']:"";
        this.theadClass = input['theadClass']?input['theadClass']:"";
        this.tbodyClass = input['tbodyClass']?input['tbodyClass']:"";
        this.trClass = input['trClass']?input['trClass']:"";
        this.tdClass = input['tdClass']?input['tdClass']:"";
        this.thClicked = input['thClicked']?input['thClicked']:null; 
        this.tdClicked = input['tdClicked']?input['tdClicked']:null;
        this.thHovered = input['thHovered']?input['thHovered']:null;    
        this.tdHovered = input['tdHovered']?input['tdHovered']:null;
        this.trHovered = input['trHovered']?input['trHovered']:null;
        
    }
    
}

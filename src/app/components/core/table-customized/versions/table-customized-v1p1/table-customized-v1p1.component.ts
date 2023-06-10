import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { TableSetting } from '../../models/table-setting';

@Component({
  selector: 'app-table-customized-v1p1',
  templateUrl: './table-customized-v1p1.component.html',
  styleUrls: ['./table-customized-v1p1.component.css','../../themes/table-customized-v1_1.css']
})
export class TableCustomizedV1p1Component implements OnInit, DoCheck {
  @Input() inputSetting? : TableSetting 
  
  /////////////Test value
  protected headerClickedFunc: any = (a:any) => {
    console.log("header "+ a + " clicked");
  }
  protected headerHoveredFunc:any = (a: any) => {
    console.log("header "+ a + " hovered");
  }
  public cellClicked: any= (a:any) => {
    console.log("cell " + a + " clicked")
  }
  public cellHovered: any = (a: any) =>{
    console.log("cell " + a + " hovered")
  }
    
  public setting: TableSetting = new TableSetting( {
    titles: [
      { displayName: "Test 1", variableName: "test1" },
      { displayName: "Test 2", variableName: "test2" },
      { displayName: "Test 3", variableName: "test3" }
    ],
    data: [
      { test1: "a", test2: 1, test3: "i" },
      { test1: "b", test2: 2, test3: "ii" },
      { test1: "c", test2: 3, test3: "iii" },
    ],
    tableClass: "table table-bordered",
    theadClass: this.bootstrapBgColor("blue") + " text-bold",
    thClicked: this.headerClickedFunc,
    tdClicked: this.cellClicked
  });

  
  
  ngOnInit(){
    //initialize setting from parent components. If not, the coponent will add default setting
    if(this.inputSetting) this.setting = this.inputSetting;
  }

  ngDoCheck(): void {
    //if table setting only have data, without titles declear,
    //the following function will initialize defaut title 
    if ( 
      this.setting && this.setting.titles && 
      this.setting.titles.length === 0 &&
      this.setting.data && this.setting.data.length > 0      
    ) Object.entries(this.setting.data[0]).map( 
      ([key,value]) => this.setting?.titles?.push({ variableName: key, displayName: key })
    )  
  }


  ////////////// Bootstrapp services 
  public bootstrapBgColor( color :string) : string {
  return ( ["yellow", "white","cyan"].includes(color)? 
    "bg-":"text-light bg-") +this.convertBootstrapColor(color);
  }
  public convertBootstrapColor (color : string ): string{
    switch (color){
      case "white"  : return "light";
      case "blue"   : return "primary";
      case "gray"   : return "secondary";
      case "green"  : return "success";
      case "red"    : return "danger";
      case "yellow" : return "warning";
      case "cyan"   : return "info";
      case "dark"   : return "dark"
    }
    return "";
    
  }

}

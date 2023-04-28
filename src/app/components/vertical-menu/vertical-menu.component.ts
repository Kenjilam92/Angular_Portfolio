import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class VerticalMenuComponent implements OnInit{
  public menuAPI: any;
  constructor ( private http: HttpClient)  { }
  
  ngOnInit(){
    this.http.get<any>("../../../assets/api/MenuAPI.json").subscribe( data => this.menuAPI= data);
  }
}

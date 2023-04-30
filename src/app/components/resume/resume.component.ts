import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  public resume: any;
  constructor ( private http: HttpClient)  { }
  
  ngOnInit(){
    this.http.get<any>("../../../assets/api/resume.json").subscribe( data => this.resume= data);
  }
}

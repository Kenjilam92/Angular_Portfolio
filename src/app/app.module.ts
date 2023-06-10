import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { ArticleComponent } from './components/core/article/article.component';
import { HistoryComponent } from './components/templates/history/history.component';
import { MainContentComponent } from './components/core/main-content/main-content.component';
import { VerticalMenuComponent } from './components/core/vertical-menu/vertical-menu.component';
import { ResumeComponent } from './components/templates/resume/resume.component';
import { TableCustomizedV1p1Component } from './components/core/table-customized/versions/table-customized-v1p1/table-customized-v1p1.component';
import { TableCustomizedV1p2Component } from './components/core/table-customized/versions/table-customized-v1p2/table-customized-v1p2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    HistoryComponent,
    MainContentComponent,
    VerticalMenuComponent,
    ResumeComponent,
    TableCustomizedV1p1Component,
    TableCustomizedV1p2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

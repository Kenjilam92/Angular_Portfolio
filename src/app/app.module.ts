import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { ArticleComponent } from './components/core/article/article.component';
import { InjectableTableComponent } from './components/core/injectable-table/injectable-table.component';
import { HistoryComponent } from './components/history/history.component';
import { TableCustomizedComponent } from './components/core/table-customized/table-customized.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    InjectableTableComponent,
    HistoryComponent,
    TableCustomizedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WritersComponent } from './components/writers/writers.component';
import { BooksComponent } from './components/books/books.component';
import { NotpageComponent } from './components/notpage/notpage.component';
import { DetailWriterComponent } from './components/writers/detail-writer/detail-writer.component';

@NgModule({
  declarations: [
    AppComponent,
    WritersComponent,
    BooksComponent,
    NotpageComponent,
    DetailWriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

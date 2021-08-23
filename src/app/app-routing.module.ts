import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { NotpageComponent } from './components/notpage/notpage.component';
import { DetailWriterComponent } from './components/writers/detail-writer/detail-writer.component';
import { WritersComponent } from './components/writers/writers.component';

const routes: Routes = [
  {path: 'writers', component: WritersComponent},
  {path: 'writers/:wID', component:DetailWriterComponent},
  {path: 'books', component: BooksComponent},
  {path: '**', pathMatch: 'full', component: NotpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

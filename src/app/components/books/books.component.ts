import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../model/book.model';
import { WritersService } from 'src/app/services/writers.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  arrBooks: Book[];


  constructor(private bookService: BooksService, private writerService: WritersService) {     
  }

  ngOnInit(): void {
    this.bookService.getAllBooks()
    .then(books=>{
      this.arrBooks = books;
    });

  }

}

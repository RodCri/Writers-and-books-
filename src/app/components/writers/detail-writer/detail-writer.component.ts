import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WritersService } from '../../../services/writers.service';
import { Writer } from '../../../model/writer.model';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../model/book.model';

@Component({
  selector: 'app-detail-writer',
  templateUrl: './detail-writer.component.html',
  styleUrls: ['./detail-writer.component.css']
})
export class DetailWriterComponent implements OnInit {

  writer: Writer;
  arrBooks: Book[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private writerService: WritersService,
    private bookService: BooksService) { 
      this.arrBooks = [];
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params =>{
      this.writer = await this.writerService.getByID(parseInt(params.wID));
    })
    this.activatedRoute.params.subscribe(async params =>{
      this.arrBooks = await this.bookService.getBooksWriter(parseInt(params.wID));
    });
    
  }

}

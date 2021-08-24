import { Injectable } from '@angular/core';
import { BOOKS } from '../db/libros.db';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[];

  constructor() {
    this.books = [];
   }

  getAllBooks():Promise<Book[]>{
    return new Promise((resolve, rejects)=>{
      resolve(BOOKS);
    });
  }

  getBooksWriter(pId: number): Promise<Book[]>{ 
    return new Promise((resolve, reject)=>{
      const writer = BOOKS.find((element)=>{
        if(element.escritor == pId){
          this.books.push(element);
        }
      });
      resolve(this.books);
    });
  }
}

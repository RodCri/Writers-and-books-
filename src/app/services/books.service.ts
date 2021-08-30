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

  getBooksWriter(pId): Promise<Book[]>{ 
    return new Promise((resolve, reject)=>{
      const arrFiltrado = BOOKS.filter(libro => {
        // if(element.escritor == pId){
        //   this.books.push(element);
        // }
        return libro.escritor === pId;
      });
      resolve(arrFiltrado);
    });
  }
}

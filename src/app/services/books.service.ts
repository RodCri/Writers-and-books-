import { Injectable } from '@angular/core';
import { BOOKS } from '../db/libros.db';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAllBooks():Promise<Book[]>{
    return new Promise((resolve, rejects)=>{
      resolve(BOOKS);
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  search(value: string) {
    return this.http
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=20`
      )
      .pipe(map((response) => response['items']));
  }

  getBooks(bookName: string): Observable<Book[]> {
    return this.http
      .get<Book[]>(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=20`
      )
      .pipe(
        map((response) => {
          let books: Book[] = [];
          books = response['items'];
          return books;
        })
      );
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchBookDetailsService {
  public singleBookDetails : any;
  public submittedBookDetails = [];
  public subBooksCount : number = 0; 
  public addedCartBooksCount : number = 0;
  public singleCartBooks = [];
  constructor() { }


  setBookDetails(item: any): void {    
    this.singleBookDetails = item;
  }

  getBookDetails() {
    return this.singleBookDetails;
  }

  setCartBooks(item: any) {
    this.singleCartBooks.push(item);
  }

  getCartBooks() {
    return this.singleCartBooks;
  }

  setSubmitedBookDetails(item : any) {
    this.submittedBookDetails.push(item);
  }

  getSubmitedBookDetails() {
    return this.submittedBookDetails;
  }

  setSubmitedBooksCounts() {
    this.subBooksCount += 1;
  }

  getSubmitedBooksCounts() {
    return this.subBooksCount;
  }

  clearSubmittedBooksCounts() {
    this.subBooksCount = 0;
  }

  setAddedCartBooksCounts() {
    this.addedCartBooksCount += 1;
  }

  getAddedCartBooksCounts() {
    return this.addedCartBooksCount;
  }

  clearAddedCartBooksCounts() {
    this.addedCartBooksCount = 0;
  }
}

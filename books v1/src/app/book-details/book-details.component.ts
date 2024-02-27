import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})


export class BookDetailsComponent implements OnInit {
  bookId: number = 0;
  bookName: string='';
  bookDescription: string='';

  addedBooks: { title: string, paragraph: string, id: number }[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.bookId = this.activatedRoute.snapshot.params['id']; // Get the bookId from the route parameters

        // Retrieve the addedBooks array from the router state
        if (history.state && history.state['addedBooks']) {
          this.addedBooks = history.state['addedBooks'];
        }
    


     // Find the book with the matching bookId from the addedBooks array
     const book = this.getBookById(this.bookId);
     if (book) {
       this.bookName = book.title;
       this.bookDescription = book.paragraph;
       
  }else{
    this.bookName = "the added books is not passed correctly!!";
  }

}
private getBookById(bookId: number): { title: string, paragraph: string, id: number } | undefined {
  // return this.addedBooks.find(book => book.id === bookId);
  // return this.addedBooks[1];
  return this.addedBooks.find(book => book.id === bookId);
}
}
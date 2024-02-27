import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  constructor(private router: Router) { }
  @Input() bookTitle: string = '';
  @Input() bookParagraph: string='';
  @Input() bookId: number=0;

  navigateToBookDetails(title: string) {
    this.router.navigate(['/book-details'], { state: { title: title } });
  }
}

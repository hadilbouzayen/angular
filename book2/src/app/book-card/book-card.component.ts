import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() bookTitle:string='';
  @Input() bookdesc:string='';
  @Input() bookId:number=0;

}

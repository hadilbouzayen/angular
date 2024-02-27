import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent {

  newBookTitle: string = '';
  newBookParagraph: string = '';


  @Output() bookAdded = new EventEmitter<{ title: string, paragraph : string }>();

  submitForm() {
    const book = { title: this.newBookTitle, paragraph: this.newBookParagraph };
    this.bookAdded.emit(book);
    this.newBookTitle = ''; // Clear the input field
    this.newBookParagraph='';

  }

}

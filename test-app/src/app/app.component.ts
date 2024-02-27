import { Component } from '@angular/core';
import { cardData } from 'src/assets/data/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardData = cardData;
}

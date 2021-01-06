import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/models/quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {

  @Input() quote: Quote;

  constructor() { }

}

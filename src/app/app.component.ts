import { Component, OnInit } from '@angular/core';
import { Quote } from './models/quote.model';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-intro';
  quote!: Quote;

  constructor(private quoteService: QuoteService) {}

  getQuote() {
    this.quoteService.getOfficeQuote().subscribe((quote: any) => {
      console.log(quote);
      this.quote = quote.data;
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, scheduled, asapScheduler } from 'rxjs';
import { Quote } from '../models/quote.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  endpoint: string = 'https://www.officeapi.dev/api/quotes/random';

  constructor(private http: HttpClient) { }


  getOfficeQuote(): Observable<any> {
    return this.http.get<Quote>(`${this.endpoint}`)
  }
  
}

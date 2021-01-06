import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { Quote } from '@angular/compiler';
import { Character } from '../models/character.model';

const mockQuote = {
  id: 'one',
  content: 'Test',
  character: {
    id: 'two',
    firstname: 'Michael',
    lastname: 'Scott'
  }
}

describe('QuoteService', () => {
  let service: QuoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(QuoteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return dummy quote data when endpoint is called', (done: DoneFn) => {
    service.getOfficeQuote().subscribe(quote => {
      expect(quote).toEqual(mockQuote);
      done();
    });

    const req = httpMock.expectOne('https://www.officeapi.dev/api/quotes/random');
    req.flush(mockQuote);
  });

  it('should verify that the request method was GET', (done: DoneFn) => {
    service.getOfficeQuote().subscribe(quote => {
      done();
    });

    const req = httpMock.expectOne('https://www.officeapi.dev/api/quotes/random');
    expect(req.request.method).toBe("GET");
    req.flush(mockQuote);
  })
});

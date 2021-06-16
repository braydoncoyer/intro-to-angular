import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { Character } from './models/character.model';
import { Quote } from './models/quote.model';
import { QuoteService } from './services/quote.service';

let mockCharacter: Character;

let mockQuote: Quote;

@Component({
  selector: 'app-button',
  template: '',
})
class MockButtonComponent {
  @Input() buttonText: string;
  @Output() buttonClickEvent: EventEmitter<any> = new EventEmitter();
}

@Component({
  selector: 'app-quote',
  template: '',
})
class MockQuoteComponent {
  @Input() quote: Quote;
}

class MockQuoteService {
  getOfficeQuote(): any {}
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let quoteService: QuoteService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, MockButtonComponent, MockQuoteComponent],
      providers: [{ provide: QuoteService, useClass: MockQuoteService }],
    }).compileComponents();
    quoteService = TestBed.inject(QuoteService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    mockCharacter = {
      id: 'test',
      firstname: 'michael',
      lastname: 'scott',
    };
    mockQuote = {
      id: 'test',
      content: 'a quote',
      character: mockCharacter,
    };
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call getOffQuote function from service', () => {
    const spy = spyOn(quoteService, 'getOfficeQuote').and.returnValue(
      of(mockQuote)
    );
    component.getQuote();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getOffQuote function and data should be returned', () => {
    const spy = spyOn(quoteService, 'getOfficeQuote').and.returnValue(
      of(mockQuote)
    );
    component.getQuote();
    expect(component.quote).toEqual(mockQuote);
  });

  it('should locate quote element on page if quote data is present', () => {
    component.quote = mockQuote;
    fixture.detectChanges();
    const quoteEl = fixture.debugElement.queryAll(
      By.css('.container__elements-quote')
    )[0].nativeElement;
    expect(quoteEl).not.toBeUndefined();
  });
});

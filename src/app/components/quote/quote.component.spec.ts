import { Quote } from '../../models/quote.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Character } from 'src/app/models/character.model';

import { QuoteComponent } from './quote.component';
import { By } from '@angular/platform-browser';

const mockCharacter: Character = {
  id: 'test',
  firstname: 'michael',
  lastname: 'scott'
};

const mockQuote: Quote = {
  id: 'test',
  content: 'a quote',
  character: mockCharacter
}

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('provides quote data and renders on screen', () => {
    component.quote = mockQuote;
    expect(component.quote).toEqual(mockQuote);

    fixture.detectChanges();

    const quoteEl = fixture.debugElement.queryAll(By.css('.quote__container'))[0].nativeElement;
    expect(quoteEl.innerHTML).toContain('a quote');
  })
});

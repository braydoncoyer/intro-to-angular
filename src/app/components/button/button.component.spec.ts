import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set button text correctly if provided', () => {
    component.buttonText = 'Testing';
    expect(component.buttonText).toBe('Testing');
    fixture.detectChanges();

    const buttonEl = fixture.debugElement.queryAll(By.css('.button__container'))[0].nativeElement;
    expect(buttonEl.innerHTML).toContain('Testing');
  });

  it('should emit event when button is clicked', () => {
    const spy = spyOn(component.buttonClickEvent, 'emit');
    component.onButtonClick();
    expect(spy).toHaveBeenCalled();

  })
});

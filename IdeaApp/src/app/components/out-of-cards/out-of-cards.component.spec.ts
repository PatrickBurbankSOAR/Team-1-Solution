import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfCardsComponent } from './out-of-cards.component';

describe('OutOfCardsComponent', () => {
  let component: OutOfCardsComponent;
  let fixture: ComponentFixture<OutOfCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutOfCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedCardsComponent } from './liked-cards.component';

describe('LikedCardsComponent', () => {
  let component: LikedCardsComponent;
  let fixture: ComponentFixture<LikedCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

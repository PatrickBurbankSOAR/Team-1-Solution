import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaCardDetailsComponent } from './idea-card-details.component';

describe('IdeaCardDetailsComponent', () => {
  let component: IdeaCardDetailsComponent;
  let fixture: ComponentFixture<IdeaCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitIdeaPageComponent } from './submit-idea-page.component';

describe('SubmitIdeaPageComponent', () => {
  let component: SubmitIdeaPageComponent;
  let fixture: ComponentFixture<SubmitIdeaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitIdeaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitIdeaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

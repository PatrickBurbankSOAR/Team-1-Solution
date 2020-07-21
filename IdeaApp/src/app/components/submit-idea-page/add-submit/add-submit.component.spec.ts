import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubmitComponent } from './add-submit.component';

describe('AddSubmitComponent', () => {
  let component: AddSubmitComponent;
  let fixture: ComponentFixture<AddSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

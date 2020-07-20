import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegistrationComponent } from './add-registration.component';

describe('AddRegistrationComponent', () => {
  let component: AddRegistrationComponent;
  let fixture: ComponentFixture<AddRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

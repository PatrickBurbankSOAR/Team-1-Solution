import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMainPageComponent } from './registration-main-page.component';

describe('RegistrationMainPageComponent', () => {
  let component: RegistrationMainPageComponent;
  let fixture: ComponentFixture<RegistrationMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

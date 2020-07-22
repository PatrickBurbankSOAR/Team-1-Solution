import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUserProfilePageComponent } from './other-user-profile-page.component';

describe('OtherUserProfilePageComponent', () => {
  let component: OtherUserProfilePageComponent;
  let fixture: ComponentFixture<OtherUserProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUserProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUserProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

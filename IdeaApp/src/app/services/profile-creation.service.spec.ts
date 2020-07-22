import { TestBed } from '@angular/core/testing';

import { ProfileCreationService } from './profile-creation.service';

describe('ProfileCreationService', () => {
  let service: ProfileCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

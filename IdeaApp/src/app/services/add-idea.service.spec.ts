import { TestBed } from '@angular/core/testing';

import { AddIdeaService } from './add-idea.service';

describe('AddIdeaService', () => {
  let service: AddIdeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddIdeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

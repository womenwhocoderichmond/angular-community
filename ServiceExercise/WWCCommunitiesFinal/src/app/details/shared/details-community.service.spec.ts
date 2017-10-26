import { TestBed, inject } from '@angular/core/testing';

import { DetailsCommunityService } from './details-community.service';

describe('DetailsCommunityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsCommunityService]
    });
  });

  it('should be created', inject([DetailsCommunityService], (service: DetailsCommunityService) => {
    expect(service).toBeTruthy();
  }));
});

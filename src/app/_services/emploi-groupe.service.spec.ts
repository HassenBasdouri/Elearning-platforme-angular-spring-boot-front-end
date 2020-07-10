import { TestBed } from '@angular/core/testing';

import { EmploiGroupeService } from './emploi-groupe.service';

describe('EmploiGroupeService', () => {
  let service: EmploiGroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploiGroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

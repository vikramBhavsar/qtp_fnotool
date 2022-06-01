import { TestBed } from '@angular/core/testing';

import { FnoFormService } from './fno-form.service';

describe('FnoFormService', () => {
  let service: FnoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FnoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

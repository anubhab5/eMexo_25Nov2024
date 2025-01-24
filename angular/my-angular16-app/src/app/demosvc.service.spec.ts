import { TestBed } from '@angular/core/testing';

import { DemosvcService } from './demosvc.service';

describe('DemosvcService', () => {
  let service: DemosvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemosvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

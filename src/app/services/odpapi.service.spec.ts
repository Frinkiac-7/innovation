import { TestBed } from '@angular/core/testing';

import { OdpapiService } from './odpapi.service';

describe('OdpapiService', () => {
  let service: OdpapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdpapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

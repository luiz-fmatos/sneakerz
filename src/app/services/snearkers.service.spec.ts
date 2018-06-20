import { TestBed, inject } from '@angular/core/testing';

import { SnearkersService } from './snearkers.service';

describe('SnearkersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnearkersService]
    });
  });

  it('should be created', inject([SnearkersService], (service: SnearkersService) => {
    expect(service).toBeTruthy();
  }));
});

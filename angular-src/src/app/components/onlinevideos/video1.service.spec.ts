import { TestBed, inject } from '@angular/core/testing';

import { Video1Service } from './video1.service';

describe('Video1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Video1Service]
    });
  });

  it('should be created', inject([Video1Service], (service: Video1Service) => {
    expect(service).toBeTruthy();
  }));
});

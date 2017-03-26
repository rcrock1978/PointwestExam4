/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidateServiceService } from './validate-service.service';

describe('ValidateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateServiceService]
    });
  });

  it('should ...', inject([ValidateServiceService], (service: ValidateServiceService) => {
    expect(service).toBeTruthy();
  }));
});

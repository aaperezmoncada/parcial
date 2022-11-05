import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { VehiculosService } from './vehiculos.service';

describe('VehiculosService', () => {
  let service: VehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(VehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

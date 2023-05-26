import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activarBorrarGuard } from './activar-borrar.guard';

describe('activarBorrarGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activarBorrarGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

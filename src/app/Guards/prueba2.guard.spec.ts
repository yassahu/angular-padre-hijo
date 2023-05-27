import { TestBed } from '@angular/core/testing';

import { Prueba2Guard } from './prueba2.guard';

describe('Prueba2Guard', () => {
  let guard: Prueba2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Prueba2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

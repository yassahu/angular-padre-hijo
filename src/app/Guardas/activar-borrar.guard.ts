import { CanActivateFn } from '@angular/router';

export const activarBorrarGuard: CanActivateFn = (route, state) => {
  return false;
};

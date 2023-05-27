import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guarda1Guard: CanActivateFn = (route, state) => {
  const router:Router = inject(Router);

  let fecha:Date=new Date()
  let hora=fecha.getHours()
  if(hora>=10)
    return true
  else{
    router.navigate(["/"])
    return false
  }

};


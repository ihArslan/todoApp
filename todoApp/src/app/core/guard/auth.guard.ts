import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loginServices = inject(LoginService)

  if (loginServices.isSucces) {
    return true;
  }
  router.navigate(['']);
  return false;
};

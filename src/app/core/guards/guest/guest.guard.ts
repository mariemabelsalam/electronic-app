import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
  const id = inject(PLATFORM_ID)
  const router = inject(Router)
  if (isPlatformBrowser(id)) {
    const user = localStorage.getItem('id')
    if (!user) {
      router.navigate(['/login'])
      return false;
    }
    else {
      return true;
    }
  }
  return true;
};

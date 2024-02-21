import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { map, take } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router)
  return authService.checkLoggedIn().pipe(take(1),map((loggedIn:boolean)=>{
    if(loggedIn){
      return true;
    }else{
      return router.createUrlTree(['/login'])
    }
  }));
};

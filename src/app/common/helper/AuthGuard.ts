import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
        private tokenStorage: TokenStorageService,
        private router: Router,
    ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.tokenStorage.getToken()) {
      return this.router.createUrlTree(
        ['/index', 
        // { message: 'you do not have the permission to enter' }
      ],
        { skipLocationChange: true }
      );
    } else {
      return true;
    }
  }
}

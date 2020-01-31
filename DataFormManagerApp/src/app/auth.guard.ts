import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private cookieService: CookieService) { }



  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;

    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  // canActivate(): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     if (this._authService.loggedIn()) {

  //       this._authService.verifyCookie()
  //         .subscribe(resp => {
  //           console.log(resp)
  //           if (resp == "success") {
  //             resolve(true);
  //           } else {
  //             reject(false);
  //           }
  //         })

  //     } else {
  //       this._router.navigate(['/login'])
  //       reject(false);
  //     }
  //   })
  // }

}

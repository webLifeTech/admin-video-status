import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  loggedInUser: any = {};
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private readonly oAuthservice: OAuthService,
  ) { }

  // All Globally Function Here

  // Success Toastr
  successToastr(msg: any) {
    this.toastr.success(msg, 'success!', {
      timeOut: 3000,
    });
  }

  // Error Toastr
  errorToastr(msg: any) {
    this.toastr.error(msg, 'oops!', {
      timeOut: 3000,
    });
  }

  logout() {
    localStorage.removeItem('airlineLoggedUser');
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { GlobalService } from 'src/app/service/global.service';
// import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    public api: AuthService,
    public gs: GlobalService,
    // private socialAuthService: SocialAuthService
  ) { }

  ngOnInit(): void {

  }

  loginWithGoogle() {
    this.api.loginWithGoogle();
  }

  skipLogin() {
    this.router.navigate(['/airlines'])
  }
}

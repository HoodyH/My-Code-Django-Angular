import { Component } from '@angular/core';
import { AuthService } from "src/app/modules/auth/services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.scss',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  getUsername(): string {
    return this.authService.getLoggedUsername()
  }

  // logout the user and reload the login page
  doLogout() {
    this.authService.doLogout();
    this.router.navigate(['/login']).then();
  }
}

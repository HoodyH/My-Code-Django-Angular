import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showLoginErrorMessage: boolean = false;
  hide: boolean = true
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogin(userData: any) {
    console.log(userData)
    this.authService.doLogin(
        userData.email,
        userData.password
      ).subscribe({
      next: () => {
        this.router.navigate(['/']).then(success => {})
      },
      error: (error) => {
        console.log(error);
        this.showLoginErrorMessage = true;
      }
    })
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

}

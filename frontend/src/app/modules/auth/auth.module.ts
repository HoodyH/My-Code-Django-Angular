import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// services
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthAppInterceptor } from './services/auth.interceptor';
import { LocalStorageService } from './services/storage.service'

// ui
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

// pages
import { LoginComponent } from './pages/login/login.component';

// routing
import { AuthRoutingModule } from './auth-routing.module'


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
  ],
  exports: [
    LoginComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthAppInterceptor, multi: true },
    LocalStorageService,
  ],
  bootstrap: [LoginComponent]
})
export class AuthModule { }

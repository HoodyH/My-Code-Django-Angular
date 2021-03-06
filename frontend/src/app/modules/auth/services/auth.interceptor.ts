import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';


@Injectable()
export class AuthAppInterceptor implements HttpInterceptor {

  constructor( private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authService.getAuthToken()
    if (token) {
      request = request.clone({setHeaders: {Authorization: `Token ${token}`}});
    }
    return next.handle(request);
  }
}

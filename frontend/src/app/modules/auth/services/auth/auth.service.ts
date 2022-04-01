import { Injectable } from '@angular/core';
import {catchError, Observable, of} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from "../api/api.urls";
import {LocalStorageService} from "../storage.service";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService,
  ) { }

  public getAuthToken(): string {
    return this.storage.getAuthToken()
  }

  public getLoggedUsername(): string {
    return this.storage.getUsername()
  }

  public doLogin(email: string, password: string): Observable<any>{
      const loginData = {
        username: email,
        password: password
      }

      // process the request and save the login data
      return this.http.post(ApiUrls.U_LOGIN(), loginData).pipe(
        catchError((error, caught) => {
          if (error.status == 401 || error.status == 403) {
            return of(error.status);
          }
          return error;
        }),
        map(r => {
          console.log(r)
          const response = <any>r;
          if (response === 401|| response === 403){
            return false
          }
          this.storage.setAuthToken(response.token)
          this.storage.setUsername(response.username)
          return true
        })
      );
  }

  public doLogout(){
    this.storage.clearStorage();
  }

  public checkLogin(): boolean{
    let token: string = this.storage.getAuthToken();

    if(!token){ return false}
    return true
  }
}

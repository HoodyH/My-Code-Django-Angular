import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

    private AUTH_TOKEN = "LM0KEY0XX60001";
    private USERNAME = "LM0KEY1XX00001";

    private static set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    private static get(key: string) {
        return localStorage.getItem(key);
    }

    private static remove(key: string) {
        localStorage.removeItem(key);
    }

    public clearStorage(){
      localStorage.clear();
      sessionStorage.clear();
    }

    public getAuthToken() : string {
    let token = LocalStorageService.get(this.AUTH_TOKEN);

    if(!token || "null"==token){
      return "";
    }
    return token;
 }

  public setAuthToken(token: string) {
    LocalStorageService.set(this.AUTH_TOKEN, token);
  }

  public getUsername(): string {
    let value = LocalStorageService.get(this.USERNAME);
    return !value ? "" : value;
  }

  public setUsername(username: string) {
    LocalStorageService.set(this.USERNAME, username);
  }
}

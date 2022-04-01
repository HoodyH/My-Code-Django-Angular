import {environment} from "src/environments/environment";

export class ApiUrls {
  static URL_BASE = environment.apiBaseUrl;

  // Auth
  static U_LOGIN = () => `${ApiUrls.URL_BASE}/api/auth/login/`;
  static U_REGISTER = () => `${ApiUrls.URL_BASE}/api/auth/register/`;
}

import { BASE_URL } from '../utils/constants';
import { getCookie } from "../utils/cookies";
import { BaseApi } from './BaseApi';

type THeaders = {
  Accept: string;
  ["Content-Type"]: string;
};

type TSettings = {
  baseUrl: string;
  headers: THeaders;
};

export type TNewUser = {
  name: string;
  email: string;
  password: string;
}

export type TLoginUser = Omit<TNewUser, 'name'>;

interface IAuth {
  readonly settings: TSettings;
}

class Auth extends BaseApi implements IAuth {
  public readonly settings!: TSettings;
  private _authUrl: string;
  private _pwdUrl: string;
  private _headers: THeaders;
  private _refreshToken: string | undefined;

  constructor(settings: TSettings) {
    super();
    this._authUrl = `${settings.baseUrl}/auth`;
    this._pwdUrl = `${settings.baseUrl}/password-reset`;
    this._headers = settings.headers;
  }

  public async registerUser(newUserData: TNewUser): Promise<any> {
    const res = await fetch(`${this._authUrl}/register`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: newUserData.email,
        password: newUserData.password,
        name: newUserData.name,
      }),
    });
    return this.getResponseData(res);
  }

  public async loginUser(userData: TLoginUser): Promise<any> {
    const res = await fetch(`${this._authUrl}/login`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });
    return this.getResponseData(res);
  }

  public async updateToken(): Promise<any> {
    this._refreshToken = getCookie("refreshToken");
    const res = await fetch(`${this._authUrl}/token`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        token: this._refreshToken,
      }),
    });
    return this.getResponseData(res);
  }

  public async logoutUser(): Promise<any> {
    this._refreshToken = getCookie("refreshToken");
    const res = await fetch(`${this._authUrl}/logout`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        token: this._refreshToken,
      }),
    });
    return this.getResponseData(res);
  }

  public async forgotPwd(email: string): Promise<any> {
    const res = await fetch(this._pwdUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
      }),
    });
    return this.getResponseData(res);
  }

  public async changePwd({ password, code }: { password: string; code: string; }): Promise<any> {
    const res = await fetch(`${this._pwdUrl}/reset`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        token: code,
      }),
    });
    return this.getResponseData(res);
  }
}

const config = {
  baseUrl: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const auth = new Auth(config);

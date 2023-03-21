import { getCookie } from "../utils/cookies";

type THeaders = {
  Accept: string;
  ["Content-Type"]: string;
};

type TSettings = {
  authUrl: string;
  pwdUrl: string;
  headers: THeaders;
};

interface IAuth {
  readonly settings: TSettings;
}

class Auth implements IAuth {
  public readonly settings!: TSettings;
  private _authUrl: string;
  private _pwdUrl: string;
  private _headers: THeaders;
  private _refreshToken: string | undefined;

  constructor(settings: TSettings) {
    this._authUrl = settings.authUrl;
    this._pwdUrl = settings.pwdUrl;
    this._headers = settings.headers;
  }

  async _getResponseData(res: Response) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(err);
    }
    return res.json();
  }

  async registerUser(newUserData: { email: string; password: string; name: string; }): Promise<any> {
    const res = await fetch(`${this._authUrl}/register`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: newUserData.email,
        password: newUserData.password,
        name: newUserData.name,
      }),
    });
    return this._getResponseData(res);
  }

  async loginUser(userData: { email: string; password: string; }): Promise<any> {
    const res = await fetch(`${this._authUrl}/login`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });
    return this._getResponseData(res);
  }

  async updateToken(): Promise<any> {
    this._refreshToken = getCookie("refreshToken");
    const res = await fetch(`${this._authUrl}/token`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        token: this._refreshToken,
      }),
    });
    return this._getResponseData(res);
  }

  async logoutUser(): Promise<any> {
    this._refreshToken = getCookie("refreshToken");
    const res = await fetch(`${this._authUrl}/logout`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        token: this._refreshToken,
      }),
    });
    return this._getResponseData(res);
  }

  async forgotPwd(email: string): Promise<any> {
    const res = await fetch(this._pwdUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
      }),
    });
    return this._getResponseData(res);
  }

  async changePwd({ password, code }: { password: string; code: string; }): Promise<any> {
    const res = await fetch(`${this._pwdUrl}/reset`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        token: code,
      }),
    });
    return this._getResponseData(res);
  }
}

const config = {
  authUrl: "https://norma.nomoreparties.space/api/auth",
  pwdUrl: "https://norma.nomoreparties.space/api/password-reset",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const auth = new Auth(config);

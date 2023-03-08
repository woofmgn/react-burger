import { getCookie } from "../utils/cookies";

class Auth {
  constructor(settings) {
    this._authUrl = settings.authUrl;
    this._pwdUrl = settings.pwdUrl;
    this._headers = settings.headers;
  }

  async _getResponseData(res) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(err);
    }
    return res.json();
  }

  async registerUser(newUserData) {
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

  async loginUser(userData) {
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

  async logoutUser() {
    const refreshToken = getCookie("refreshToken");
    const res = await fetch(`${this._authUrl}/logout`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        token: refreshToken,
      }),
    });
    return this._getResponseData(res);
  }

  async forgotPwd(email) {
    const res = await fetch(this._pwdUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
      }),
    });
    return this._getResponseData(res);
  }

  async changePwd({ password, code }) {
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

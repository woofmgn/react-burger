import { getCookie } from "../utils/cookies";

class UserData {
  constructor(settings) {
    this._url = settings;
  }

  async _getResponseData(res) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(err);
    }
    return res.json();
  }

  async getUserData() {
    this._token = getCookie("token");
    const res = await fetch(this._url, {
      method: "GET",
      credentials: "same-origin",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer${this._token}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    return this._getResponseData(res);
  }

  async setUserData(newData) {
    this._token = getCookie("token");
    const res = await fetch(this._url, {
      method: "PATCH",
      credentials: "same-origin",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer${this._token}`,
      },
      body: JSON.stringify(newData),
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    return this._getResponseData(res);
  }
}

const options = "https://norma.nomoreparties.space/api/auth/user";

export const userApi = new UserData(options);

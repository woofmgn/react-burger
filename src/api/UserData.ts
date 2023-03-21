import { getCookie } from "../utils/cookies";

interface IUserData {
  readonly settings: string;
}

type TNewUserData = {
  name: string;
  email: string;
  password: string;
};

class UserData implements IUserData {
  public readonly settings!: string;
  private _url: string;
  private _token: string | undefined;

  constructor(settings: string) {
    this._url = settings;
  }

  async _getResponseData(res: Response) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(err);
    }
    return res.json();
  }

  async getUserData(): Promise<any> {
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

  async setUserData(newData: TNewUserData): Promise<any> {
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

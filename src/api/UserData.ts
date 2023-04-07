import { BASE_URL } from '../utils/constants';
import { getCookie } from "../utils/cookies";
import { BaseApi } from './BaseApi';

interface IUserData {
  readonly settings: string;
}

export type TNewUserData = {
  name: string;
  email: string;
  password: string;
};

type TCurrentUs = {
  name: string;
  email: string;
}

class UserData extends BaseApi implements IUserData {
  public readonly settings!: string;
  private _url: string;
  private _token: string | undefined;

  constructor(baseUrl: string) {
    super()
    this._url = `${baseUrl}/auth/user`;
  }

  public async getUserData(): Promise<any> {
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
    return this.getResponseData(res);
  }

  public async setUserData(newData: TNewUserData): Promise<any> {
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
    return this.getResponseData(res);
  }
}

export const userApi = new UserData(BASE_URL);

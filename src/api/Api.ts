import { BASE_URL } from "../utils/constants";
import { getCookie } from '../utils/cookies';
import { BaseApi } from './BaseApi';

interface IApi {
  readonly settings: string;
}

class Api extends BaseApi implements IApi {
  public readonly settings!: string;
  private _url: string;
  private _token: string | undefined;

  constructor(baseUrl: string) {
    super();
    this._url = baseUrl;
  }

  public async getData() {
    const res = await fetch(`${this._url}/ingredients`);
    return this.getResponseData(res);
  }

  public async newOrder(data: string[]) {
    this._token = getCookie('token')?.replaceAll(' ', '');
    const res = await fetch(`${this._url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this._token}`
      },
      body: JSON.stringify({ ingredients: data }),
    });
    return this.getResponseData(res);
  }
}

export const api = new Api(BASE_URL);

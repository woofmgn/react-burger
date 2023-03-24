import { BASE_URL } from "../utils/constants";
import { BaseApi } from './BaseApi';

interface IApi {
  readonly settings: string;
}

class Api extends BaseApi implements IApi {
  public readonly settings!: string;
  private _url: string;

  constructor(baseUrl: string) {
    super();
    this._url = baseUrl;
  }

  public async getData() {
    const res = await fetch(`${this._url}/ingredients`);
    return this.getResponseData(res);
  }

  public async newOrder(data: string[]) {
    const res = await fetch(`${this._url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: data }),
    });
    return this.getResponseData(res);
  }
}

export const api = new Api(BASE_URL);

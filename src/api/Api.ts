import { API_URL } from "../utils/constants";

interface IApi {
  readonly settings: string;
}

class Api implements IApi {
  public readonly settings!: string;
  private _url: string;

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

  async getData() {
    const res = await fetch(`${this._url}/ingredients`);
    return this._getResponseData(res);
  }

  async newOrder(data: string[]) {
    const res = await fetch(`${this._url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: data }),
    });
    return this._getResponseData(res);
  }
}

export const api = new Api(API_URL);

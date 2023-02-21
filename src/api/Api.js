import { API_URL } from "../utils/constants";

class Api {
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

  async getData() {
    const res = await fetch(`${this._url}/ingredients`);
    return this._getResponseData(res);
  }

  async newOrder(data) {
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

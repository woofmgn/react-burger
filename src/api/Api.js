import { API_URL } from "../utils/constants";

class Api {
  constructor(settings) {
    this._urlData = settings.urlGetData;
    this._urlOrder = settings.urlNewOrder;
  }

  async _getResponseData(res) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(err);
    }
    return res.json();
  }

  async getData() {
    const res = await fetch(this._urlData);
    return this._getResponseData(res);
  }

  async newOrder(data) {
    const res = await fetch(this._urlOrder, {
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

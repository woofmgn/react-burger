export class BaseApi {
  public async getResponseData(res: Response) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(err);
    }
    return res.json();
  }
}

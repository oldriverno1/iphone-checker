import axios from 'axios';

export interface IHttpClient {
  get<T>(url: string): Promise<T>;
}

export class HttpClient implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return response.data;
  }
}

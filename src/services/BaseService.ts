import axios from "axios";
import {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  ResponseType,
} from "axios";

import { Settings } from "../config";

import { injectable } from "inversify";

export interface IBaseService {}

@injectable()
export abstract class ServiceHelper {
  protected baseUrl: string | undefined = Settings.ApiUrl;

  protected apiUrl: string | undefined = Settings.ApiUrl;

  constructor() {
    console.log(Settings.ApiUrl);
  }

  public httpGet(route: string, request: any): Promise<AxiosResponse<any>> {
    const path = `${this.apiUrl}/${route}`;
    return axios.get<any>(path);
  }

  protected httpPost(route: string, data: any): Promise<AxiosResponse<any>> {
    console.log(this.apiUrl);
    const path = `${this.apiUrl}/${route}`;
    console.log(path);
    return axios.post(path, data);
  }

  protected httpPut(route: string, data: any): Promise<AxiosResponse<any>> {
    const path = `${this.apiUrl}/${route}`;
    return axios.put(path, data);
  }

  protected httpDelete(route: string): Promise<AxiosResponse<any>> {
    const path = `${this.apiUrl}/${route}`;

    return axios.delete(path);
  }


}
export class BaseService extends ServiceHelper implements IBaseService {
}
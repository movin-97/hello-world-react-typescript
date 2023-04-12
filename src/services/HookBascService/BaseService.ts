import Axios, { AxiosResponse, AxiosInstance } from "axios";

export class BaseService {
  
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = this.createClient();
  }

  createClient() {
    return Axios.create({
      baseURL:"https://dummyjson.com",
      headers: { "Content-Type": "application/json" },
    });
  }

  public httpGet<T>(url: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url);
  }

  public httpPost<T>(url: string, data: T): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data);
  }

  public httpPut<T>(url: string, data: T): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data);
  }

  public httpDelete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url);
  }
}

export default BaseService;

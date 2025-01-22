import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
const DEFAULT_CONFIG = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  Origin: "https://act.hoyolab.com",
  Referer: "https://act.hoyolab.com/",
  "Accept": "application/json, text/plain, */*",
  "Accept-Encoding": "gzip, deflate",
  "Accept-Language": "en-US;q=0.8",
};
const X_APP_CONFIG = {
  
};

class AxiosClient {
  private client: AxiosInstance;

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.client = axios.create({
      baseURL,
      headers: defaultHeaders,
    });

    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        console.log(config.headers.toString())
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse) => {

        return response.data;
      },
      (error: any) => {

        console.error('API Error:', error);
        return Promise.reject(error);
      }
    );
  }


  get<T>(url: string, params: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<T> {
    return this.client.get(url, { params, ...config });
  }


  post<T>(url: string, data: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<T> {
    return this.client.post(url, data, { ...config });
  }


  put<T>(url: string, data: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<T> {
    return this.client.put(url, data, { ...config });
  }

  delete<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    return this.client.delete(url, { ...config });
  }

}

export default AxiosClient;

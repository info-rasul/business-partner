import axios, { AxiosInstance } from "axios";
import { StatusAuth } from "@/models";

export class Http {
  protected readonly instance: AxiosInstance;
  isAuth: boolean;

  constructor(status: StatusAuth) {
    this.isAuth = status && status.auth ? status.auth : false;
    this.instance = axios.create({
      baseURL: process.env.VUE_APP_API_URL
    });
    this.init();
  }

  init(): AxiosInstance {
    if (this.isAuth) {
      this.instance.interceptors.request.use(
        request => {
          request.headers.authorization = process.env.VUE_APP_BEARER;
          return request;
        },
        error => {
          return Promise.reject(error);
        }
      );
    }

    return this.instance;
  }
}

import { cacheEnum } from "@/enum/cacheEnum"
import router from "@/router"
import store from "@/utils/store"
import axios, { AxiosHeaders, AxiosRequestConfig } from "axios"
import nprogress from "nprogress"
import "nprogress/nprogress.css"

export default class Axios {
    private instance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors()

    }

    public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await this.instance.request<D>(config)
            resolve(response.data)
          } catch (error) {
            reject(error)
          }
        }) as Promise<D>
      }

    private interceptors() {
        this.interceptorsRequest()
        this.interceptorsResponse()
    }
    private interceptorsRequest() {
        this.instance.interceptors.request.use((config) => {
        if(store.get(cacheEnum.TOKEN_NAME))
        config.headers.Authorization = `Bearer ${store.get(cacheEnum.TOKEN_NAME).token}`
        nprogress.start()
            return config;

        }, (error) => {
            return Promise.reject(error);
        });


    }
    private interceptorsResponse() {
        this.instance.interceptors.response.use((response) => {
            nprogress.done()
            return response;
        }, (error) => {
            // switch (error.response.status){
            //     case 401:store.remove(cacheEnum.TOKEN_NAME)
            //     router.push({name:'login'})
            //     break
            // }
            return Promise.reject(error);
        });
    }
}
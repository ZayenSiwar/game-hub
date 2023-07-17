import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
    count: number;
    results: T[];
    next: string | null;
  }
const axiosInstance  =axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '53085444edd045cb8abd21c9422662dd'
    }
})

class APICLIENT<T>{
    endpoint:string;
    constructor(endpoint:string){
        this.endpoint=endpoint;
    }
    getAll(config: AxiosRequestConfig){
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
        .then((res)=> res.data)
    }
}
export default APICLIENT;
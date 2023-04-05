import { getPost } from "@/pages/about";
import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const instance = axios.create({
  baseURL: publicRuntimeConfig.baseURL,
});

// request
instance.interceptors.request.use((config: any) => {
  const _config = {
    ...config,
    headers: {
      "X-RapidAPI-Key": publicRuntimeConfig.key,
      "X-RapidAPI-Host": publicRuntimeConfig.host,
    },
  };
  return _config;
});

// response
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export async function request<T>(params: { [key: string]: any }): Promise<T> {
  // axios get request 처리 후 data return
  const res = await instance.request(getPost().KEY);
  console.log(res.data);
  return res.data as T;
}

export async function mutate<T>(...params: any): Promise<T> {
  // axios post 및 타입 받아서 mutation
  // console.log(params);

  return null as T;
}

const f = (params: any) => {
  return {
    url: "",
    method: "",
    params,
  };
};
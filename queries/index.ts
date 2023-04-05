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
      Authorization: `Bearer ${publicRuntimeConfig.token}`,
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

export async function request(params: { [key: string]: any }) {
  const res = await instance.request(params);
  return res.data;
}

export async function mutate(...params: any) {
  // axios post 및 타입 받아서 mutation
  // console.log(params);

  return null;
}

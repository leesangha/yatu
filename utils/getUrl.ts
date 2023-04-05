import getConfig from "next/config";

export const getHostURL = () => {
  return getConfig().publicRuntimeConfig.baseURL;
};

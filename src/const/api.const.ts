import Env from './env.const';
import Axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { APIResponse, APICodeEnum } from 'src/models/api/api.model';

export const HEADER_TOKEN = 'X-TOKEN';
export const HEADER_DOMAIN = 'X-DOMAIN';

declare module 'vue/types/vue' {
  interface Vue {
    $api: AxiosInstance;
    $mock: MockAdapter;
  }
}

export const baseAxiosConfig = {
  timeout: 600000,
  // NOTE API為固定Domain，不管任何商家都是對此 api domain連線
  baseURL: Env.AppAPIDomain,
  // client 有需要 token 溝通的部分一率丟到前端處理
  headers: {
    [HEADER_DOMAIN]: 'TestDomain'
  }
};
console.log(Env.AppAPIDomain,process.env.APP_API_DOMAIN);
console.log('base-->',baseAxiosConfig.baseURL);
export const api = Axios.create(baseAxiosConfig);
export const mock = new MockAdapter(api);

// Response handler
export function defaultResponseHandler(response: AxiosResponse<APIResponse<any>>) {
  // 只有這個條件是可以正常回傳
  if (isAPIResponse(response.data) && response.data.Code === APICodeEnum.Success) {
    return response;
  }

  throw new Error('response ERRRRRR!!!');
}

export function isAPIResponse(data: any): data is APIResponse<typeof data> {
  return Boolean(data instanceof Object && 'Data' in data && 'Code' in data);
}

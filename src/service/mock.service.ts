import { AxiosRequestConfig, AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { APIMockResponse } from 'src/models/api/api.model';
import ApiService from './api.service';

type method = Exclude<AxiosRequestConfig['method'], undefined | 'options' | 'OPTIONS'>;
type status = number;
type data<T> = (config: AxiosRequestConfig) => T;
type passThrough = boolean;
type MockItem<T = any> = [string, method, status, data<T>, passThrough?];

export default class MockService extends ApiService {
  constructor(public api: AxiosInstance, public mock?: MockAdapter) {
    super(api);
  }

  public mocked: boolean = false;
  public mockList: MockItem[] = [];
  public passThrough: boolean = false;

  public onPost(url: string, method: method = 'POST') {
    return this.Success(url, method);
  }

  public onGet(url: string, method: method = 'GET') {
    return this.Success(url, method);
  }

  public Success(url: string, method: method) {
    return (data: any = null, status: status = 200, passThrough: boolean = this.passThrough): MockItem => {
      return [url, method, status, data, passThrough];
    };
  }

  public Fail(url: string, method: method) {
    return (data: any = null, status: status = 500, passThrough: boolean = this.passThrough): MockItem => {
      return [url, method, status, data, passThrough];
    };
  }

  public useMock(mock = this.mock) {
    if (mock === undefined) {
      throw new Error('Please make the instance before use the MockAdapter.');
    }

    const mockMethodCallMap: {
      [key in method]: (url: string) => ReturnType<typeof MockAdapter.prototype.onGet>;
    } = {
      get: (url) => mock.onGet(url),
      GET: (url) => mock.onGet(url),
      delete: (url) => mock.onDelete(url),
      DELETE: (url) => mock.onDelete(url),
      head: (url) => mock.onHead(url),
      HEAD: (url) => mock.onHead(url),
      post: (url) => mock.onPost(url),
      POST: (url) => mock.onPost(url),
      put: (url) => mock.onPut(url),
      PUT: (url) => mock.onPut(url),
      patch: (url) => mock.onPatch(url),
      PATCH: (url) => mock.onPatch(url),
      link:(url) => mock.onGet(url),//補充
      LINK:(url) => mock.onGet(url),//補充
      unlink:(url) => mock.onGet(url),//補充
      UNLINK:(url) => mock.onGet(url)//補充
    };

    if (this.mocked === false) {
      Object.values(this.url).forEach((url) => {
        this.mockList
          .filter((item) => item[0] === url)
          .forEach((item) => {
            const [url, method, status, data, passThrough] = item;

            // 不跳過並且方法存在
            if (!passThrough && method in mockMethodCallMap) {
              mockMethodCallMap[method](url).reply(async (config) => [
                status || 200,
                APIMockResponse(typeof data === 'function' ? await data(config) : data)
              ]);
            }
          });

        mock.onGet(new RegExp(`${url}/*`)).passThrough();
        mock.onAny(url).passThrough();
      });

      this.mocked = true;
    }

    return this;
  }
}

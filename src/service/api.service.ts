import { AxiosInstance } from 'axios';

export default class ApiSevice{
  public url:Record<string,string> = {}

  constructor(public api:AxiosInstance){}
}

import MockService from './mock.service';
import {APIResponse} from '../models/api/api.model';
import {api,mock} from '../const/api.const'
export class CommonService extends MockService{
  public url ={
      CommonGetGlobalConfig: '/api/Common/GetGlobalConfig'
  }
  public CommonGetGlobalConfig<D = {CdnDomain:string},A = APIResponse<D>>(){
    console.log(this.url.CommonGetGlobalConfig);
    //console.log(this.api);
    return this.api.post<A>(this.url.CommonGetGlobalConfig)
  }
}

export default new CommonService(api,mock).useMock();

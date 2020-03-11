import MockService from './mock.service';
import {APIResponse} from '../models/api/api.model';
import {api,mock} from '../const/api.const';
import {SiteConfig,webSitePatternResponse} from '../models/siteConfig.model';
import * as CommonMock from 'src/../.mocks/common.mock';
export class CommonService extends MockService{
  public url ={
      CommonGetGlobalConfig: '/api/Common/GetGlobalConfig',
      CommonGetSiteConfig:'/api/Common/GetSiteConfig',
      CommonGetWebsitePattern:'/api/Common/GetWebsitePattern'
  }

  public mockList = [
    this.onPost(this.url.CommonGetSiteConfig)(CommonMock.CommonGetSiteConfig)
  ]
  public CommonGetGlobalConfig<D = {CdnDomain:string},A = APIResponse<D>>(){
    console.log(this.url.CommonGetGlobalConfig);
    //console.log(this.api);
    return this.api.post<A>(this.url.CommonGetGlobalConfig)
  }
  public CommonGetSiteConfig<D = {SiteConfig :SiteConfig},A = APIResponse<D>>(){
    return this.api.post<A>(this.url.CommonGetSiteConfig)
  }
  public CommonGetWebsitePattern<D= webSitePatternResponse,A= APIResponse<D>>(){
    return this.api.post<A>(this.url.CommonGetWebsitePattern)
  }
}

export default new CommonService(api,mock).useMock();

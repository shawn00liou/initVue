import Vue from 'vue';
import {VuexModule,MutationAction,Mutation,Action, Module} from 'vuex-module-decorators'
import ENV from '../const/env.const';
import  commonService  from 'src/service/common.service';
@Module(
  {
    name:'app',
    namespaced:true,
    stateFactory:true
  }
)
export default class AppModule extends VuexModule{
  public cdnDomain:string = ENV.AppCDNDomain || '';

  @MutationAction({mutate:['cdnDomain'],rawError:true})
  async fetchGlobalConfig(){
      console.log('MutationAction===>fetchGlobalConfig!!!');
      try{
          const globalConfig = (await commonService.CommonGetGlobalConfig()).data.Data;
          console.log('globalConfig-->',globalConfig);
          return {
            cdnDomain:globalConfig.CdnDomain
          }
      }catch(err){
          throw err;
      }
  }
}

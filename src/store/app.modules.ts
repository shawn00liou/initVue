import Vue from 'vue';
import {VuexModule,MutationAction,Mutation,Action, Module} from 'vuex-module-decorators'
import ENV from '../const/env.const';
import commonService  from 'src/service/common.service';
import {SiteConfig} from '../models/siteConfig.model';
import { extend } from 'quasar';
import Axios from 'axios'
@Module(
  {
    name:'app',
    namespaced:true,
    stateFactory:true
  }
)
export default class AppModule extends VuexModule{
  public cdnDomain:string = ENV.AppCDNDomain || '';
  public siteConfig:SiteConfig | null  = null;

  @Mutation
  setSiteConfig(config:SiteConfig){
      console.log('@Mutation setSiteConfig-->',config.template);
      this.siteConfig = config;
  }

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

  @Action({commit:'setSiteConfig',rawError:true})
  async fetchSiteConfig(){
    console.log('Action====>fetchSiteConfig');
    try{
      const {SiteConfig:siteConfig} = (await commonService.CommonGetSiteConfig()).data.Data;
      const $cdn  = Vue.filter('cdn');
      const res = (await commonService.CommonGetWebsitePattern()).data.Data;
      console.log('Action######',res.WebsitePatternJsonUrl);
      console.log('Action######',res.ManagerJsonUrl);
      console.log(siteConfig.template);

      const cdn1 = $cdn(res.WebsitePatternJsonUrl);
      const cdn2 = $cdn(res.ManagerJsonUrl);

      const axiosHeaders = {
        headers: {
          'content-type': 'application/json'
        }
      };

      const websitePattern = await Promise.all([
        Axios.get(cdn1, axiosHeaders).then((res) => res.data),
        Axios.get(cdn2, axiosHeaders).then((res) => res.data)
      ]).then<SiteConfig>(([templateJsonString, customJsonString]) => {
        // const templatePattern = JSON.parse(templateJsonString.trim());
        const templatePattern = siteConfig;
        const customPattern = JSON.parse(customJsonString.trim());
        console.log('pattern success!!!');
        return extend(true, {}, templatePattern, customPattern);
      });


      //return extend(true,{},siteConfig)
      //console.log(websitePattern);
      return websitePattern;
    }catch(err){
        throw err;
    }
  }

}

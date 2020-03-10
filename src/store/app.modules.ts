import Vue from 'vue';
import {VuexModule,MutationAction,Mutation,Action, Module} from 'vuex-module-decorators'
import ENV from '../const/env.const';
@Module(
  {
    name:'app',
    namespaced:true,
    stateFactory:true
  }
)
export default class AppModule extends VuexModule{
  public cdnDomain:string = ENV.AppCDNDomain || '';

  // @MutationAction({mutate:['cdnDomain'],rawError:true})
  // async fetchGlobalConfig(){

  // }
}

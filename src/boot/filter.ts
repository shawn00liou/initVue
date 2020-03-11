import { Arguments } from '../models/server.model';
import AppModule from 'src/store/app.modules';
import { getModule } from 'vuex-module-decorators';
export default ({store,Vue}:Arguments)=>{
  const appStore = getModule(AppModule,store);
  console.log('boot Filter default!!!!!!');
  Vue.filter('cdn', (val: string, cdn: string = appStore.cdnDomain) => {
    // NOTE 如果是靜態檔案就不做 domain 轉址
    if (val.indexOf('/statics') === 0) {
      return val;
    }
    let resUrl:string = new URL(val, cdn).toString();
    console.log('boot Filter-->',resUrl);
    return resUrl;
  });
}

import { Arguments } from 'src/models/server.model';
import Env from '../const/env.const';
import { getModule } from 'vuex-module-decorators';
import AppModule from '../store/app.modules'
console.log('boot app setting!!!')

export default async (context:Arguments)=>{
  const {Vue} = context;
  console.log('boot app async!!!');
  if(Env.Server){
    console.log('SERVER INIT!!!');
    await serverInit(context);
  }
}

async function serverInit({store}:Arguments){
  const appStore = getModule(AppModule,store);
  console.log('call serverInit');
  await appStore.fetchGlobalConfig();
}

import { Arguments } from '../models/server.model';
import AppModule from '../store/app.modules';
import { getModule } from 'vuex-module-decorators';

console.log('boot fetchSiteConfig setting!!!');

export default async ({store}:Arguments)=>{
  console.log('boot fetchSiteConfig async!!!')
  const appStore = getModule(AppModule,store);
  await appStore.fetchSiteConfig();
}


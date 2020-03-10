//import Vue from  '../../node_modules/vue/types/index';
//import Vuex from '../../node_modules/vuex/types/index'
console.log('Load store index');

import Vue from 'vue'
import Vuex from 'vuex'
import AppModule from './app.modules';
import { StoreType } from 'src/models/store.model'
Vue.use(Vuex);

export default function(){
  const store = new Vuex.Store<StoreType>({
    modules:{
      app:AppModule
    }

  })

  return store;
}

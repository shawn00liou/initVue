//import Vue from  '../../node_modules/vue/types/index';
//import Vuex from '../../node_modules/vuex/types/index'
console.log('Load store index');

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default function(){
  const store = new Vuex.Store({

  })

  return store;
}

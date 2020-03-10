import Vue from 'vue';
import {VuexStore} from 'src/models/store.model'
export interface Arguments{
  Vue:typeof Vue;
  store:VuexStore;
}

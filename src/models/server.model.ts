import Vue from 'vue'
import { VuexStore } from '../models/store.model'
import VueRouter from 'vue-router'
export interface Arguments{
  router: VueRouter;
  Vue: typeof Vue;
  store: VuexStore;
}

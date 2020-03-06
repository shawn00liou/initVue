import Vue from 'node_modules/vue/types/index';
import VueRouter from 'node_modules/vue-router/types/index';

export interface BootArgumnents{
  router:VueRouter;
  Vue:typeof Vue;
}

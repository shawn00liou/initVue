import { AxiosInstance } from 'axios'
import { Store } from 'vuex'

export interface StoreType{
  $api: AxiosInstance | null;
}

export type VuexStore = Store<StoreType> & {$api: AxiosInstance}

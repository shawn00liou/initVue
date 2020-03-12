import { Arguments } from 'src/models/server.model'
import { getModule } from 'vuex-module-decorators'
import AppModule from '../store/app.modules'
import { locomotive } from '../helper/helper'
console.log('boot site setting!!!')

export default async (context: Arguments) => {
  const { store } = context
  // 為了取回siteConfig
  const appStore = getModule(AppModule, store)
  const siteConfig = appStore.siteConfig!
  const dirname = locomotive(siteConfig.template)
  console.log('boot site async!!!', siteConfig.template, '/', dirname)

  // 動態載入指定樣板的流程
  const templateRoutes = await import(
    `@template/${dirname}/routes.ts`
  )
  templateRoutes.default(context)
}

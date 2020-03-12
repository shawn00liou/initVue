import { AdamLayout } from '@template/Adam/index'
import { Arguments } from '../../models/server.model'

console.log('dynamic load routes.ts')
export default function AdamRoutesLoader(context:Arguments){
  const { router } = context
  console.log('Adam routes default!!!')
  router.addRoutes([
    {
      path: '/',
      component: AdamLayout,
      children: [
        { path: '', component: () => import('../../pages/Index.vue') }
      ]
    }
  ])
}

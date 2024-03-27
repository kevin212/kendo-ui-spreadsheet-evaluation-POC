import Vue from 'vue'
import Router from 'vue-router'
import WorkSheet from '@/components/WorkSheet'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/WorkSheet'
    },
    {
      path: '/WorkSheet',
      name: 'WorkSheet',
      component: WorkSheet
    }
  ]
})

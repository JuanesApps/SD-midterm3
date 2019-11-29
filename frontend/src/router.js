import Router from 'vue-router'
import Methods from './components/Methods.vue'
import OptGet from './components/OptGet.vue'
import OptGetId from './components/OptGetId.vue'
import OptPost from './components/OptPost.vue'
import OptPatch from './components/OptPatch.vue'
import OptDelete from './components/OptDelete.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default new Router({
  routes: [
    {
      path: '/methods',
      name: 'methods',
      redirect: '/methods/get',
      component: Methods,
      children: [
        {
          path: 'get',
          name: 'get',
          component: OptGet
        },
        {
          path: 'getid',
          name: 'getid',
          component: OptGetId
        },
        {
          path: 'post',
          name: 'post',
          component: OptPost
        },
        {
          path: 'patch',
          name: 'patch',
          component: OptPatch
        },
        {
          path: 'delete',
          name: 'delete',
          component: OptDelete
        }
      ]
    }
  ]
})

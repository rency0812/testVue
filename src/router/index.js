
import LoginView from '@/components/login'
import DashIndex from '@/components/Dash'

import IndexView from '@/components/views/index'
import Leaflet from '@/components/views/leaflet'
import Tables from '@/components/views/table'
import Tasks from '@/components/views/tasks'
import Info from '@/components/views/side'
import Service from '@/components/views/service'
import useAxios from '@/components/views/axios'
import moment from '@/components/views/moment'
import wEditor from '@/components/views/editor'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/',
    name: 'landIndex',
    component: DashIndex,
    meta: {description: {}},
    children: [
      {
        path: 'index',
        name: 'Index',
        alias: '',
        component: IndexView,
        meta: {description: 'first page'}
      },
      {
        path: 'tables',
        name: 'Tables',
        component: Tables,
        meta: {desctiption: 'a table'}
      },
      {
        path: 'info',
        name: 'Info',
        component: Info,
        meta: {desctiption: 'vue info'}
      },
      {
        path: 'leaflet',
        name: 'Leaflet',
        component: Leaflet,
        meta: {description: 'a map'}
      },
      {
        path: 'tasks',
        name: 'Tasks',
        component: Tasks,
        meta: {description: 'a task list'}
      },
      {
        path: 'service',
        name: 'Service',
        component: Service,
        meta: {description: 'heat MIT proJect'}
      },
      {
        path: 'axios',
        name: 'axios',
        component: useAxios,
        meta: {}
      },
      {
        path: 'moment',
        name: 'moment',
        component: moment,
        meta: {}
      },
      {
        path: 'editor',
        name: 'editor',
        component: wEditor,
        meta: {}
      },
      {
        path: '*',
        redirect: '/'
      }
    ]
  }
]

export default routes


// import HelloWorld from '@/components/HelloWorld'
import DashIndex from '@/components/Dash'

import IndexView from '@/components/views/index'
import Leaflet from '@/components/views/leaflet'
import Tables from '@/components/views/table'
import Tasks from '@/components/views/tasks'
import Info from '@/components/views/side'

const routes = [
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
      }
    ]
  }
]

export default routes

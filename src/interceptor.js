import axios from 'axios'
import router from './router'

axios.defaults.timeout = 1000
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(res => {
  if (res.data.code === '401') {
    alert('你没有相应的权限')
    router.push({
      path: '/login'
    })
  }
}, error => {
  return Promise.reject(error)
})

export default axios

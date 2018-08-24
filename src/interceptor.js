import axios from 'axios'
import router from './router'
import Qs from 'qs'

axios.defaults.timeout = 1000 * 30
axios.defaults.transformRequest = [function (data) {
  data = Qs.stringify(data)
  return data
}]
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
  return res
}, error => {
  return Promise.reject(error)
})

export default axios

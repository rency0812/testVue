import axios from '../interceptor'

export default {
  request (method, url, data = null) {
    if (!method) {
      console.error('请传入一个方法参数')
      return
    }
    if (!url) {
      console.error('请传入一个url地址参数')
      return
    }

    return axios({method, url, data})
  },
  get (url, data = null) {
    if (!url) {
      console.error('请传入一个url地址参数')
      return
    }
    return axios({
      url: url,
      method: 'get',
      data: {
        ...data
      }
    })
  },
  post (url, data = null) {
    if (!url) {
      console.error('请传入一个url地址参数')
      return
    }
    const payload = {
      ...data
    }
    return axios.post({url, payload})
  }
}

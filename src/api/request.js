import axios from 'axios'
import { baseUrl } from '@/appConfig'
import { replaceStr } from '@/utils'

// 创建axios实例
const service = axios.create({
  baseURL: baseUrl,
  timeout: 10 * 1000,
  withCredentials: false // 是否携带cookie
})

// request拦截器
service.interceptors.request.use(
  config => {
    // restful处理
    config.url = replaceStr(config.url, config.params)
    config.params = {}
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    let res = response.data
    return Promise.resolve(res)
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

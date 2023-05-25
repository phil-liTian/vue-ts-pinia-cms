import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const service: AxiosInstance = axios.create({
  timeout: 3000
})

// 请求拦截器
service.interceptors.request.use(config => {
  return config
},error => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
  if( response.status === 200 ) {
    return response.data
  } else {
    Promise.reject()
  }
}, error => {
  Promise.reject(error)
})


export default service
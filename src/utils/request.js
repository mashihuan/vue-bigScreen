import axios from 'axios'
import { Message } from 'element-ui'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60000,
  headers: {}
})

instance.interceptors.request.use((config) => {
  config.headers.sessionToken = sessionStorage.getItem('sessionToken')
  return config
}, (err) => {
  window.console.log(err)
  return Promise.reject(err)
})

instance.interceptors.response.use((res) => {
  if (res.data.return_code !== 20000) {
    Message.close()
    Message({
      message: res.data.return_msg || 'Error',
      type: 'error',
      duration: 3000
    })
    if (res.data.return_code === 50008 || res.data.return_code === 50012 || res.data.return_code === 50014) {
      location.reload()
    }
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return res.data
  }
}, (err) => {
  Message({
    message: err.message,
    type: 'error',
    duration: 3000
  })
  return Promise.reject(err)
})

export default instance

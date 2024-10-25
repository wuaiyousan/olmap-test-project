/**
 * 全站http配置
 */
import axios from 'axios'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Vue from 'vue'
window.Vue = Vue

//默认超时时间
axios.defaults.timeout = 30000
//返回其他状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500
}
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true
// NProgress 配置
NProgress.configure({
  showSpinner: false,
})
//http request拦截
axios.interceptors.request.use(
  (config) => {
    //开启 progress bar
    NProgress.start()
    const meta = config.meta || {}
    const isToken = meta.isToken === false
    //headers中配置text请求
    if (config.text === true) {
      config.headers['Content-Type'] = 'text/plain'
    }
    if (config.isFormData) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
//http response 拦截
axios.interceptors.response.use(
  (res) => {
    // 不自动报错，获取错误信息自定义展示
    if (res.config && res.config.notShowError) {
      return res
    }
    //关闭 progress bar
    NProgress.done()
    //获取状态码
    const status = res.data.code || res.status
    let message =
      res.data.msg ||
      res.data.message ||
      res.data.error_description ||
      '未知错误'
    //如果是401则跳转到登录页面
    if (status === 401 || status === 402) {
      Message({
        message: message,
        type: 'warning',
        offset: 48,
      })
      return
    }
    // 如果请求为非200否者默认统一处理
    if (status !== 200 && status !== '200') {
      if (res.config.responseType === 'blob') {
        let reader = new FileReader()
        reader.onload = (event) => {
          let data = event.target.result
          let obj = JSON.parse(data)
          message = obj.msg || message
          Message({
            message: message,
            type: 'error',
            offset: 48,
          })
        }
        reader.readAsText(res.data)
      } else {
        Message({
          message: message,
          type: 'error',
          offset: 48,
        })
      }

      return Promise.reject(new Error(message))
    }
    return res
  },
  (error) => {
    NProgress.done()
    if (
      [
        'ic_err_01',
        'ic_err_02',
        'ic_err_03',
        'ic_err_04',
        'ic_err_05',
        'ic_err_06',
        'ic_err_07',
        'ic_err_08',
      ].includes(error.response.data.code)
    ) {
      Message({
        message: error.response.data.msg,
        type: 'error',
        offset: 48,
      })
    }
    return Promise.reject(new Error(error))
  }
)

export default axios
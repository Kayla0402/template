import axios from 'axios'
// import QS from 'qs'
import router from '../router'
const config = {
  baseURL: '/api',
  timeout: 10000
}
const _axios = axios.create(config)
_axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}
/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin()
      break
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      alert('登录过期，请重新登录')
      localStorage.removeItem('token')
      // store.commit('loginSuccess', null)
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
    // 404请求不存在
    case 404:
      alert('请求的资源不存在')
      break
    default:
      console.log(3333)
      console.log(other)
      alert(other)
  }
}
// 请求拦截器
_axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  })
// 相应拦截
_axios.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    console.log(error)
    const { response } = error
    console.log(response)
    if (response) {
      errorHandle(response.status, response.data.message)
      return Promise.reject(error.response)
    }
  })
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
// export function post (url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, QS.stringify(params))
//       .then(res => {
//         resolve(res.data)
//       })
//       .catch(err => {
//         reject(err.data)
//       })
//   })
// }
// /**
//  * 这里有个小细节说下，axios.get()方法和axios.post()在提交数据时参数的书写方式还是有区别的。区别就是，get的第二个参数是一个{}，然后这个对象的params属性值是一个参数对象的。而post的第二个参数就是一个参数对象。
//  * get方法，对应get请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// export function get (url, params) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, {
//       params: params
//     }).then(res => {
//       resolve(res.data)
//     }).catch(err => {
//       reject(err.data)
//     })
//   })
// }
// export default {
//   post,
//   get
// }
export default _axios

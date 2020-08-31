import _axios from './request'
const login = {
  loginPassword (params) {
    return _axios({
      url: '/user/login',
      method: 'post',
      data: params
    }).catch(err => err)
  },
  regMethod (params) {
    return _axios({
      url: '/service-member/app/member/register',
      method: 'post',
      data: params
    }).catch(err => err)
  }
}
export default login

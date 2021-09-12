import request from '../../utils/request'

const Login = (params) => request({
    method: 'POST',
    url: '/auth/loginByWeb',
    data: params
})

export default Login

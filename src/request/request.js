import axios from 'axios';

const instance = axios.create({
    // 接口
    baseURL: "http://kumanxuan1.f3322.net:8001",
    // 设置超时
    timeout: 5000
});

// 请求拦截器
instance.interceptors.request.use(config => {
    // 每次请求发送前都执行
    // console.log(config);

    // 判断用户是否登陆，
    // 若登陆了就获得 token 放入请求发送给后端
    // 若没有登陆直接return
    let token = localStorage.getItem('token');
    if (token) {
        // 携带登陆凭证发起请求
        // 请求文档规定的请求头
        config.headers['X-Nideshop-Token'] = token;
    }

    return config;
}, err => {
    return Promise.reject(err)
});

// 响应拦截器
instance.interceptors.response.use(result => {
    // 每次接受响应都执行，然后执行回调函数then
    // console.log(result);

    return result; // 被then接受
}, err => {
    return Promise.reject(err)
});

export default instance;
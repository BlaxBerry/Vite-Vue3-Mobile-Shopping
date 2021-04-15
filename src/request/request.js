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
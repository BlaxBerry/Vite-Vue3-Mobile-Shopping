import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://kumanxuan1.f3322.net:8001',
    timeout: 5000
})

// Request Interceptors
instance.interceptors.request.use(config => {
    // config.headers.token = "xxxx"
    let user = localStorage.getItem('user')
    if (user) {
        // according to API 
        config.headers['X-Nideshop-Token'] = JSON.parse(user).token
    }

    return config;
}, err => {
    return Promise.reject(err)
})

// Response Interceptors
instance.interceptors.response.use(result => {
    return result.data;
}, err => {
    return Promise.reject(err)
})


export default instance

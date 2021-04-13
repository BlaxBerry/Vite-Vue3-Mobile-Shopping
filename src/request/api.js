import request from './request';

// homepage的页面的请求数据
export const GetHomePageList = () => {
    return request.get('/index/index')
}
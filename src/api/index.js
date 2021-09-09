import request from './request'

// get home detail lists
export const GetHomeLists = () => request({
    method: 'GET',
    url: '/index/index',
})
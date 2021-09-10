import request from './request'

// get home detail lists
export const GetHomeLists = () => request({
    method: 'GET',
    url: '/index/index',
})


// get popup detail lists
export const GetPopupKeyWords = () => request({
    method: 'GET',
    url: '/search/index',
})
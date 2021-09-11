import request from '../../utils/request'

const GetPopupSearchResult = (params) => request({
    method: 'GET',
    url: '/goods/list',
    params
})

export default GetPopupSearchResult
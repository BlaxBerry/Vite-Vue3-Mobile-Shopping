import request from '../../utils/request'

const GetGoodsRecommended = (params) => request({
    method: 'GET',
    url: '/goods/related',
    params
})

export default GetGoodsRecommended
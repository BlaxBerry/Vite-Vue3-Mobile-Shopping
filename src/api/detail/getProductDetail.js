import request from '../../utils/request'

const GetGoodsDetail = (params) => request({
    method: 'GET',
    url: '/goods/detail',
    params
})

export default GetGoodsDetail
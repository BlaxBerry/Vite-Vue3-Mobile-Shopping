import request from '../../utils/request'

const addGoodToCart = (params) => request({
    method: 'POST',
    url: '/cart/add',
    data: params
})

export default addGoodToCart

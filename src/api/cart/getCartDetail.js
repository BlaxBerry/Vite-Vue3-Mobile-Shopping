import request from '../../utils/request'

const getCartDetail = () => request({
    method: 'GET',
    url: '/cart/index'
})

export default getCartDetail

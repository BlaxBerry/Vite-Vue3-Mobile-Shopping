import request from '../../utils/request'

const getTabBarCartAmount = () => request({
    method: 'GET',
    url: '/cart/goodscount',
})

export default getTabBarCartAmount

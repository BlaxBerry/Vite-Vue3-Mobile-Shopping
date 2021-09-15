import request from '../../utils/request'

const GetAddress = () => request({
    method: 'GET',
    url: '/address/list',
})

export default GetAddress
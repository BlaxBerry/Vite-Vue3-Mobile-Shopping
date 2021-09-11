import request from '../../utils/request'

const GetHomeLists = () => request({
    method: 'GET',
    url: '/index/index',
})

export default GetHomeLists
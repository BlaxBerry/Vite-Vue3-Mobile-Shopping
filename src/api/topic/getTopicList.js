import request from '../../utils/request'

const GetTpoicList = (params) => request({
    method: 'GET',
    url: '/topic/list',
    params
})

export default GetTpoicList

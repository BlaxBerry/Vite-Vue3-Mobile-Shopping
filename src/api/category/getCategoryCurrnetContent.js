import request from '../../utils/request'

const GetCategoryCurrnetContent = (params) => request({
    method: 'GET',
    url: '/catalog/current',
    params
})

export default GetCategoryCurrnetContent

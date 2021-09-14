import request from '../../utils/request'

const GetTCategoryList = () => request({
    method: 'GET',
    url: '/catalog/index',
})

export default GetTCategoryList

import request from '../../utils/request'

// get popup search actual time helper
const GetSearchHelper = (params) => request({
    method: 'GET',
    url: '/search/helper',
    params
})

export default GetSearchHelper
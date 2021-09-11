import request from '../../utils/request'

const GetPopupKeyWords = () => request({
    method: 'GET',
    url: '/search/index',
})

export default GetPopupKeyWords
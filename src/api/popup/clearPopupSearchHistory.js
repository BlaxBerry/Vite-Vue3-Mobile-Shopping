import request from '../../utils/request'

const ClearHistory = () => request({
    method: 'GET',
    url: '/search/clearhistory',
})

export default ClearHistory
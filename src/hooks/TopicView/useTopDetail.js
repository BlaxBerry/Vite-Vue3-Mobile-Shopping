// api 
import GetTpoicList from '../../api/topic/getTopicList'
// utils
import loading from '../../utils/loading/loading'

export default function useTopDetail(topList, page) {

    // methods
    const getLsit = async () => {
        let res = await GetTpoicList({
            page: page.toString(),
            size: '10'
        })
        if (res.errno == 0) {
            let { data } = res
            topList.list = data.data
            topList.currnetPage = data.currentPage
            topList.totalPage = data.totalPages
            // console.log(topList);
        }
    }
    getLsit()

    // loading
    loading();

}

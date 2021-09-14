// api 
import { reactive } from '@vue/runtime-dom'
import GetTpoicList from '../../api/topic/getTopicList'

export default function useTopDetail(page = '1') {

    // data
    let topList = reactive({
        list: [],
        totalPage: 0,
        currnetPage: page
    })

    // methods
    const getLsit = async () => {
        let res = await GetTpoicList({
            page: page.toString(),
            size: '10'
        })
        if (res.errno == 0) {
            let { data } = res
            topList.list = data.data
            topList.currnetPage = data.currnetPage
            topList.totalPage = data.totalPages
            console.log(topList);
        }
    }
    getLsit()


    // return
    return topList

}
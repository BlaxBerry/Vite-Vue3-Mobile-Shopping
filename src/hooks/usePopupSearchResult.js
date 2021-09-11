// api
import GetPopupSearchResult from '../api/popup/getPopupSearchResultList'
import { reactive } from "@vue/reactivity";

export default async function usePopupSearchResult(val) {
    // console.log(val);

    // data
    let searchResult = reactive({
        // product list
        list: [],
        // filter dropdown menu contnet
        menu: [],
        // result current page
        resPage: 1
    })


    // method
    const res = await GetPopupSearchResult({
        keyword: val
    })
    searchResult.list = res.data.goodsList
    searchResult.menu = res.data.filterCategory
    searchResult.resPage = res.data.currentPage
    // console.log(searchResult);

    // return
    return searchResult
}
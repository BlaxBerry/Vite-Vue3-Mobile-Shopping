// api
import GetPopupSearchResult from '../api/popup/getPopupSearchResultList'
import { reactive } from "@vue/reactivity";

export default async function usePopupSearchResult(
    val,
    order = 'desc',    // order by price
    categoryId = '0',  // order by categry id
    size = 50,   // products amount in one page
    page = 1
) {
    // console.log(val, order, categoryId);

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
        keyword: val,
        order,
        categoryId,
        sort: "price", // sort according to price firstly,
        size,
        page

    })
    searchResult.list = res.data.goodsList
    searchResult.menu = res.data.filterCategory
    searchResult.resPage = res.data.currentPage
    // console.log(searchResult);

    // return
    return searchResult
}
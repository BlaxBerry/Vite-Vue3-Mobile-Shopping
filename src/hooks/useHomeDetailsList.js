// api
import { reactive } from "vue";
import GetHomeLists from "../api/Home/getHomeList";

export default function useHomeDetailList() {

    // data
    const Lists = reactive({
        banner: [],
        brandList: [],
        categoryList: [],
        channel: [],
        hotGoodsList: [],
        newGoodsList: [],
        topicLis: []
    })

    // method
    const getHomeDetailList = async () => {
        const res = await GetHomeLists()
        Lists.banner = res.data.banner
        Lists.brandList = res.data.brandList
        Lists.categoryList = res.data.categoryList
        Lists.channel = res.data.channel
        Lists.hotGoodsList = res.data.hotGoodsList
        Lists.newGoodsList = res.data.newGoodsList
        Lists.topicLis = res.data.opicList
        console.log(Lists);
    }
    // created
    getHomeDetailList()


    // return
    return {
        Lists
    }
}
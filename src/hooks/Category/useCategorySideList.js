// api
import { ref } from '@vue/runtime-dom'
import { reactive } from 'vue'
import getCategoryList from '../../api/category/getCategoryList'

export default function useCategorySideList() {

    // data
    let SideItemList = ref([])
    let CurrentContnet = reactive({
        id: 0,
        name: '',
        desc: '',
        descIcon: '',
        warpImg: '',
        list: []
    })

    // methods
    const getSideItemList = async () => {
        const res = await getCategoryList()
        if (res.errno == 0) {
            let { data } = res
            SideItemList.value = data.categoryList
            CurrentContnet.name = data.currentCategory.name
            CurrentContnet.desc = data.currentCategory.front_desc
            CurrentContnet.descIcon = data.currentCategory.icon_url
            CurrentContnet.warpImg = data.currentCategory.wap_banner_url
            CurrentContnet.list = data.currentCategory.subCategoryList
            // console.log(SideItemList);
            // console.log(CurrentContnet);
        }
    }
    getSideItemList()


    // return
    return { SideItemList, CurrentContnet }
}
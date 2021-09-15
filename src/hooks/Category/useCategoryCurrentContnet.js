// api
import getCategoryCurrnetContent from '../../api/category/getCategoryCurrnetContent'

export default function useCategoryCurrentContnet(CurrentContnet, id) {

    //  methods
    const getuseCurrentContnet = async () => {
        let res = await getCategoryCurrnetContent({ id })
        if (res.errno == 0) {
            let { data } = res
            console.log(data);
            CurrentContnet.name = data.currentCategory.name
            CurrentContnet.desc = data.currentCategory.front_desc
            CurrentContnet.descIcon = data.currentCategory.icon_url
            CurrentContnet.warpImg = data.currentCategory.wap_banner_url
            CurrentContnet.list = data.currentCategory.subCategoryList
            // console.log(CurrentContnet);
        }
    }
    getuseCurrentContnet()


    // return 
    // return CurrentContnet
}

// api
import { reactive } from '@vue/reactivity';
import GetGoodsDetail from '../api/detail/getProductDetail'
import getRecommendList from '../api/detail/getRecommendList'

export default function useGoodsDetail(id) {

    // data
    let goodsDetail = reactive({
        gallery: [],
        info: {
            // name: '',
            // goods_brief: '',
            // goods_desc: '',
            // retail_price: 0,
            // list_pic_url: '',//sku pic
            // goods_number: 0,//sku amount
        },
        attribute: [],
        issue: [],
        recommend: [],
        isShowDetail: false
    })

    // methods
    // get recommend list by good id
    const getRecommend = async () => {
        let res = await getRecommendList({ id })
        if (res.errno == 0) {
            let recommend = res.data.goodsList
            return recommend
        }
    }
    // get good detail
    const getDetail = async () => {
        let detailResult = await GetGoodsDetail({ id })
        let detailData = detailResult.data
        // console.log(detailData);
        if (detailResult.errno == 0) {
            goodsDetail.isShowDetail = true
            goodsDetail.gallery = detailData.gallery
            goodsDetail.info = detailData.info
            goodsDetail.attribute = detailData.attribute
            goodsDetail.issue = detailData.issue
            goodsDetail.comment = detailData.comment
            goodsDetail.productList = detailData.productList
            goodsDetail.specificationList = detailData.specificationList
            goodsDetail.hasCollected = detailData.hasCollected
            let recommend = await getRecommend()
            goodsDetail.recommend = recommend
            // console.log(goodsDetail);
        } else {
            // didnt find this good's detail
            goodsDetail.isShowDetail = false
        }
    }
    getDetail()

    return {
        goodsDetail
    }
}
<template>
    <div>
        <!-- 商品详情 -->
        <!-- 商品id：{{$route.query.id}} -->

        <!-- banner VantUI轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in bannerSwipeGallery" :key="item.id">
                <img 
                    :src="item.img_url" 
                    :alt="item.img_desc" 
                    width="100%" 
                    style="display"
                >
            </van-swipe-item>
        </van-swipe>
        
        <!-- 提示组件 -->
        <Tips></Tips>

    </div>
</template>

<script>
// 引入接口请求 api
import {GetGoodDetailData} from "@/request/api.js"
// 引入 Tips小提示组件
import Tips from "@/components/Tips.vue"

export default {
    data(){
        return {
            // 轮播图数组
            bannerSwipeGallery:[]
        }
    },
    components:{
        Tips
    },
    created(){
        // 发送请求，获得该商品的详情
        GetGoodDetailData({
            // 传入商品id作为请求参数
            id:this.$route.query.id
        }).then(result=>{
            console.log(result.data.data);
            // 赋值轮播图数组
            this.bannerSwipeGallery = result.data.data.gallery;

        })
    }
}
</script>

<style lang="less" scoped>

</style>
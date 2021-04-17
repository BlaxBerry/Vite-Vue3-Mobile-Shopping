<template>
    <div>
        <!-- 商品详情 -->
        <!-- 商品id：{{$route.query.id}} -->
    </div>
</template>

<script>
// 引入接口请求 api
import {GetGoodDetailData} from "@/request/api.js"

export default {
    data(){
        return {

        }
    },
    created(){
        // 发送请求，获得该商品的详情
        GetGoodDetailData({
            // 传入商品id作为请求参数
            id:this.$route.query.id
        }).then(result=>{
            console.log(result.data.data);
        })
    }
}
</script>

<style lang="less" scoped>

</style>
<template>
    <div>
        <!-- 单个商品 -->
        <ul>
            <li v-for="item in searchGoodsList" :key="item.id">
                <img :src="item.list_pic_url" alt="" style="display:block" width="100%">
                <div class="van-ellipsis">{{item.name}}</div>
                <div class="price">{{item.retail_price | RMBformat}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:['searchGoodsList',"filterCategory"]
}
</script>

<style lang="less">
ul {
    padding: 0.10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
        width: 49%;
        margin-bottom: 0.10rem;
        background-color: #fff;
        line-height: 0.3rem;
        .price {
            color: darkred;
        }
    }
}
</style>

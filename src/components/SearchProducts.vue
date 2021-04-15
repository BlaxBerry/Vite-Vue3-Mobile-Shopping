<template>
    <div>
        <!-- 搜索结果商品展示 -->

        <van-dropdown-menu>
            <van-dropdown-item title="综合" v-model="value1" :options="option1" disabled/>
            <van-dropdown-item title="价格" v-model="value2" :options="option2" />
            <van-dropdown-item title="分类" v-model="value2" :options="option2" />
        </van-dropdown-menu>

        <div>
            <Products
                :searchGoodsList="searchGoodsList"
                :filterCategory="filterCategory"
            ></Products>
        </div>

    </div>
</template>

<script>
import Products from '@/components/Products.vue'

export default {
    data() {
        return {
            value1: 0,
            value2: 'a',
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
        };
    },
    components:{
        Products
    },
    props:['searchTipList',"filterCategory","searchGoodsList"]
};
</script>

<style lang="less" scoped>

</style>

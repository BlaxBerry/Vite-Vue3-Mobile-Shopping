<template>
    <div>
        <!-- 搜索结果商品展示 -->

        <van-dropdown-menu>
            <van-dropdown-item title="综合" disabled/>
            <van-dropdown-item title="价格" v-model="value1" :options="option2" />
            <van-dropdown-item title="分类" v-model="CategoryValue" :options="filterCategory" @change="categoryChange"/>
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
            CategoryValue: 0,
            option2: [
                { text: '由高到低', value: 0 },
                { text: '由低到高', value: 'b' }
            ],
        };
    },
    components:{
        Products
    },
    props:['searchTipList',"filterCategory","searchGoodsList"],
    methods:{
        //组件数据子传父 点击搜索分类
        categoryChange(value){
            // value 是id
            // console.log(value);
            this.$emit("categoryChange",value);
        }
    }
};
</script>

<style lang="less" scoped>

</style>

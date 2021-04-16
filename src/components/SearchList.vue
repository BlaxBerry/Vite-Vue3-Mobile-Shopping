<template>
    <!--搜索列表-->
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        >
        <van-cell 
            v-for="(item,index) in searchTipList" 
            :key="index" 
            :title="item" />
    </van-list>

</template>

<script>
export default {
    data() {
        return {
            loading: false,
            finished: true,
        };
    },
    props:['searchTipList']
};
</script>

<style lang="less" scoped>
.van-list {
    text-align: left;
    .van-cell, span {
        font-size: 0.19rem!important;
    }
}
</style>
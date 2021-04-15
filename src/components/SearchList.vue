<template>
    <!--搜索列表-->
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
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
    methods: {
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }

                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 1000);
        },
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
<template>
    <div class="search-popup">
        <!-- 搜索弹出框 -->

        <van-search
            v-model="searchValue"
            show-action
            :placeholder="placeholderValue"
            @search="onSearch"
            @cancel="onCancel"
        />
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            searchValue: '',
            placeholderValue:''
        };
    },
    methods: {
        onSearch(val) {
            // enter 输入的值
            console.log('onsearch',val);
        },
        onCancel() {
            // 点击取消，通过URL路径离场动画,返回上一层路径
            // this.$router.push('/home');
            this.$router.go(-1);
        },
    },
    created(){
        // 请求获得 placeholderValue的数据
    }
}
</script>

<style lang = "less" scoped>
.search-popup{
        width: 100%;
        height: 100%;
        position: absolute;
        /* left: 0; */
        top: 0;
        background-color: rgba(0,0,0,0.5);
    }
</style>
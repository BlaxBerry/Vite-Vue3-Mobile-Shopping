<template>
       <!-- Tabbar -->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="label-o" to="/special">专题</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
            <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="user">我的</van-tabbar-item>
        </van-tabbar>
        
</template>

<script>
export default {
    data() {
        return {
            active: 0,
        };
    },
};
</script>

<style>

</style>
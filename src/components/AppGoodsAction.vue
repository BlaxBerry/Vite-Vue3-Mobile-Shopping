<template>
    <div>
        GoodsAction 商品导航

       <van-goods-action>
           <!-- 收藏星星 -->
            <van-goods-action-icon 
                :icon="isCollected?'star':'star-o'" 
                :text="isCollected?'已收藏':'未收藏'" 
                :color="isCollected?'#ff5000':'#333'"
                @click="isCollected=!isCollected"
            />
            
            <!-- 购物车商品数量 -->
            <van-goods-action-icon 
                icon="cart-o" text="购物车" 
                :badge="cartGoodsCount" 
                @click="$router.push('/cart')"
            />
            
            <!-- 加入购物车 按钮 -->
            <van-goods-action-button 
                type="warning" text="加入购物车" 
                @click="toAddCart"
            />
            <!-- 立即购买 按钮 -->
            <van-goods-action-button 
                type="danger" text="立即购买" 
                @click="toBuyNow"
            />
        </van-goods-action>

    </div>
</template>

<script>
export default {
    data(){
        return {
            // 收藏星星被点击后，选中与否
            isCollected:false
        }
    },
    methods:{
        // 点击 加入购物车 
        toAddCart(){
            this.$emit('toAddCart') //ProductDetail.vue
        },
        // 点击 立即购买 
        toBuyNow(){
            this.$toast('Sorry，该功能尚未开放，请等待更新')
        }
    },
    props:["cartGoodsCount"]
}
</script>

<style lang="less" scoped>
// 设置层级盖住Sku组件的弹出页面
.van-goods-action {
    z-index: 99999;
}
</style>
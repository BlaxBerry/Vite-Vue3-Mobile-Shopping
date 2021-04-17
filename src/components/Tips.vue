<template>
    <div>
        <!-- Tipt小提示组件 -->
        <van-row>
            <van-col span="8"><van-icon name="checked" color="green"/>30天无忧退货</van-col>
            <van-col span="8"><van-icon name="checked" color="green"/>48小时速退款</van-col>
            <van-col span="8"><van-icon name="checked" color="green"/>满88元立包邮</van-col>
        </van-row>


    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.van-row {
    height: 0.30rem;
    line-height: 0.30rem;
    font-size: 0.05rem;
    .van-icon {
        transform: translate(-0.02rem, 0.02rem);
    }
}
</style>
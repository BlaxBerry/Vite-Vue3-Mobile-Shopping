<template>
    <div>
        <!-- cart 购物车  -->
        
        <!-- Tips小提示组件 -->
        <Tips></Tips>

        <!-- VantUI checkbox复选框 -->
        <van-checkbox-group v-model="result">
            <van-checkbox name="a">
                <!-- VantUI card卡片 -->
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                />
            </van-checkbox>
                        
        </van-checkbox-group>
        
        <!-- VantUI submitBar提交定档 -->
        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked">全选</van-checkbox>
            <template #tip>
                共计 <span class="totalNum">10000</span> 件商品
                <van-button @click="onClickEditAddress" size="small" type="primary">编辑商品数量</van-button> 
            </template>
        </van-submit-bar>


    </div>
</template>

<script>
// 引入 Tips小提示组件
import Tips from "@/components/Tips.vue"

export default {
    data(){
        return {
            result:[],
            checked:true
        }
    },
    components:{
        Tips
    },
    methods:{
        onSubmit(){},
        onClickEditAddress(){}
    }
}
</script>

<style lang="less" scoped>
.van-checkbox-group .van-checkbox {
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 0.10rem;

    /deep/.van-checkbox__label{
        flex: 1;
        padding: 0.10rem;
        

        .van-card {
            text-align: left;
        }
    }
}

// 提交表单
.van-submit-bar {
    transform: translateY(-0.50rem);
    border-bottom: 1px solid #ccc;

    .van-submit-bar__tip {
        height: 0.30rem;
        line-height: 0.30rem;

        button {
            vertical-align: middle;
            margin-left: 0.05rem;
        }

        .totalNum {
            font-size: 0.16rem;
            font-weight: 700;
        }
    }
    
}

</style>
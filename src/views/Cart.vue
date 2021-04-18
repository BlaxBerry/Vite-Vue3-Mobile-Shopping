<template>
    <div>
        <!-- cart 购物车  -->
        
        <!-- Tips小提示组件 -->
        <Tips></Tips>

        <!-- VantUI checkbox复选框 -->
        <van-checkbox-group v-model="result" :disabled="isShowStepper">
            <van-checkbox 
                :name="item.id" 
                v-for="item in cartList" :key="item.id"
                @click="changeChecked(item)"
                >
                <!-- VantUI card卡片 -->
                <van-card
                    :num="item.number"
                    :price="item.retail_price.toFixed(2)"
                    :title="item.goods_name"
                    :thumb="item.list_pic_url"
                />
                <!-- VantUI stepper步进器 -->
                <van-stepper 
                    v-model="stepperValue" 
                    v-show="isShowStepper"
                />
            </van-checkbox>
                        
        </van-checkbox-group>
        
        <!-- VantUI submitBar提交定档 -->
        <van-submit-bar 
            :price="cartTotal.checkedGoodsAmount * 100" 
            button-text="提交订单" 
            @submit="onSubmit">

            <!-- 全选框 -->
            <van-checkbox v-model="checkedAll" :disabled="isShowStepper">全选</van-checkbox>

            <template #tip>
                共计 
                <span class="totalNum">{{cartTotal.checkedGoodsCount}}</span> 
                件商品，编辑商品数量
                <!-- 编辑按钮 -->
                <van-button 
                    size="small" 
                    :type="isShowStepper?'danger':'primary'"
                    @click="onClickEdit"
                >
                    {{isShowStepper?"完成":"编辑"}}
                </van-button> 
            </template>
        </van-submit-bar>


    </div>
</template>

<script>
// 引入 Tips小提示组件
import Tips from "@/components/Tips.vue"
// 引入请求接口api
import { 
    GetCartListData, 
    ChangeCartGoodChecked
} from '@/request/api.js'


export default {
    data(){
        return {
            // 商品复选框
            // 数组元素是选中的商品（checked=1）
            result:[],
            // 底部提交表单全选框
            // checkedAll:true,
            // 购物车商品列表
            cartList:[],
            // 购物车总计数据
            cartTotal:{},

            // Stepper 步进器 步数
            stepperValue:1,
            // 步进器显示隐藏
            isShowStepper:false
        }
    },
    components:{
        Tips
    },
    created(){
        // 发送修改数据的请求
        GetCartListData().then(result=>{
            // 拿到返回的修改后的新数据，并渲染页面
           this.totalFn(result.data)
        })
    },
    computed:{
        // 全选和全不选
        checkedAll:{
             get(){
                // 复选框 ———> 全选框
                //    方法一：
                // return  this.cartTotal.checkedGoodsCount == this.cartTotal.goodsCount
                //    方法二：
                 return  this.result.length == this.cartList.length
             },
             set(val){
                //  val是要修改成的新的值
                // console.log(val);
                // 发送给后端
                let ids = [];
                this.cartList.map(item=>{
                    ids.push(item.product_id)
                })
                ChangeCartGoodChecked({
                    // 选中状态
                    isChecked:val?1:0,
                    //商品id
                    productIds:ids.join()
                    
                }).then(result=>{
                        // console.log(result.data.data);
                        // 修改发送后，拿到返回新的数据再重新渲染页面
                        this.totalFn(result.data)
                    })
             }
        }
    },
    methods:{
        onSubmit(){},
        // 商品数量编辑按钮
        onClickEdit(){
            // 显示隐藏步进器
            this.isShowStepper=!this.isShowStepper;
        },

        // 切换商品选中状态
        changeChecked(item){
            // 点击编辑按钮后禁止单选框的选中
            if(this.isShowStepper)return;
            // 告诉后端那些值被改变，后端接受后响应会处理过后的新数据
            ChangeCartGoodChecked({
                // 选中状态
                isChecked:item.checked==0?1:0,
                //商品id
                productIds:item.product_id
                
            }).then(result=>{
                console.log(result.data.data);
                // 修改发送后，拿到返回新的数据再重新渲染页面
                this.totalFn(result.data)
            })
        },

        totalFn(data){
            console.log(data.data);
            this.cartList = data.data.cartList;
            this.cartTotal = data.data.cartTotal;

            // 遍历，检查checked =1 的商品
            // 放入result数组中，使复选框显示
            this.result=[] //防止数组越来越长
            this.cartList.map(item=>{
                if(item.checked == 1){
                     this.result.push(item.id)
                }else{
                    return
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>

.van-checkbox-group {
    padding-bottom: 1.50rem;

    .van-checkbox {
        background-color: #fff;
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 0.10rem;

        /deep/.van-checkbox__label{
            flex: 1;
            padding: 0.10rem;
        
            .van-card {
                text-align: left;
                .van-card__title {
                    // font-size: 0.18rem;
                    line-height: 0.4rem;
                }
            }
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

// 步进器
.van-stepper {
    text-align: right;
}
</style>
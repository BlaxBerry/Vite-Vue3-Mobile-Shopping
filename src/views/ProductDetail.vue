<template>
    <div>
        <!-- 商品详情 -->
        <!-- 商品id：{{$route.query.id}} -->

        <!-- banner VantUI轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in bannerSwipeGallery" :key="item.id">
                <img 
                    :src="item.img_url" 
                    :alt="item.img_desc" 
                    width="100%" 
                    style="display"
                >
            </van-swipe-item>
        </van-swipe>
        
        <!-- 提示组件 -->
        <Tips></Tips>

        <!-- 商品信息 -->
        <div class="info">
            <!-- 产品名称 -->
            <div class="name">{{productInfo.name}}</div>
            <!-- 产品描述 -->
            <div class="brief">{{productInfo.goods_brief}}</div>
            <!-- 产品价格 -->
            <div class="price">{{productInfo.retail_price | RMBformat}}</div>
        </div>

        <!-- 弹出层 -->
        <van-cell title="展示弹出层" 
            is-link 
            @click="isShowSku=true"
        />

        <!-- 商品规格参数 -->
        <div class="arrtibute">
            <h3>商品参数</h3>
            <ul>
                <li v-for="(item,index) in productAttr" :key="index">
                    <span class="leftAttrName">{{item.name}}</span>
                    <span class="rightAttrValue van-ellipsis">{{item.value}}</span>
                </li>
            </ul>
        </div>

        <!-- 商品的详细信息 -->
        <div v-html="good_desc" class="goods_desc"></div>

        <!-- 常见问题 -->
        <div class="issue">
            <van-divider>常见问题</van-divider>
            <ul>
                <li v-for="item in productIssue" :key="item.id">
                    <h3>{{item.question}}</h3>
                    <p>{{item.answer}}</p>
                </li>
            </ul>
        </div>

        <!-- 推荐商品部分 -->
        <div class="recommendation">
             <van-divider>大家都在看</van-divider>
             <Products :searchGoodsList="relatedGoodsList"></Products>
        </div>

        <!-- Sku商品规格 -->
        <van-sku
            v-model="isShowSku"
            :sku="sku"
            :goods="goods"
            :quota="quota"
            :hide-stock="sku.hide_stock"
        />

        <!-- GoodsAction商品导航 -->
        <AppGoodsAction 
            @toAddCart="toAddCart"
            :cartGoodsCount="cartGoodsCount"
        ></AppGoodsAction>

    </div>
</template>

<script>
// 引入接口请求 api
import {
    GetGoodDetailData, 
    RelatedGoodListData, 
    GetCartGoodsCount
} from "@/request/api.js"
// 引入 Tips小提示组件
import Tips from "@/components/Tips.vue"
// 引入商品组件
import Products from '@/components/Products.vue'
// 引入 GoodsAction 商品导航
import AppGoodsAction from "@/components/AppGoodsAction.vue"
import Vue from 'vue'



export default {
    data(){
        return {
            // 轮播图数组
            bannerSwipeGallery:[],
            // 商品信息（名称，描述信息，价格）
            productInfo:'',
            // 商品规格参数
            productAttr:'',
            // 商品详细信息
            good_desc:'',
            // 常见问题
            productIssue:'',
            // 相关商品列表（大家都在看）
            relatedGoodsList:[],

            // Sku商品规格弹出层
            // Sku显示隐藏
            isShowSku:false,
            // 商品数据
            sku: {
                tree:[],
                // sku 库存显示隐藏
                hide_stock: false,
                // sku 库存
                stock_num:0,
                // sku 价格
                price:0
            },
            // 商品信息
            goods: {
                // Sku商品缩略图
                picture:''
            },
            // 限购数量
            quota:5,

            // 购物车商品数量
            cartGoodsCount:0
        }
    },
    components:{
        Tips,
        AppGoodsAction,
        Products
    },
    created(){
        // 发送请求，获得该商品的详情
        GetGoodDetailData({
            // 传入商品id作为请求参数
            id:this.$route.query.id
        }).then(result=>{
            console.log(result.data.data);
            // 赋值轮播图数组
            this.bannerSwipeGallery = result.data.data.gallery;
            // 商品信息（名称，描述信息，价格）
            // Info
            this.productInfo = result.data.data.info;
            // 商品规格参数
            this.productAttr = result.data.data.attribute;
            // 商品详细信息
            this.good_desc = this.productInfo.goods_desc;
            // 常见问题
            this.productIssue = result.data.data.issue;

            // Sku商品规格数据
            // Sku 商品缩略图
            this.goods.picture = this.productInfo.list_pic_url;
            // sku 剩余库存
            this.sku.stock_num = this.productInfo.goods_number;
            // sku 价格
            this.sku.price = (this.productInfo.retail_price).toFixed(2);

        })

        // 发送请求，获得相关产品数据（大家都在看）
        RelatedGoodListData({
             // 传入商品id作为请求参数
            id:this.$route.query.id
        }).then(result=>{
            // console.log(result.data.data);
            this.relatedGoodsList=result.data.data.goodsList;
        })

        // 发送请求，获取购物车商品数量
        GetCartGoodsCount().then(result=>{
            // console.log(result.data.data.cartTotal);
            this.cartGoodsCount = result.data.data.cartTotal.goodsCount;
        })
    },
    methods:{
        // 点击购物车按钮
        toAddCart(){
            //  点击购物车按钮，若sku商品规格弹出层没有展示，则展示sku
            //  若sku商品规格弹出层已经展示状态，则直接跳转cart购物车页面
            if(this.isShowSku){
                //加入购物车
                Vue.prototype.$toast.success('加入购物车')
            }else{
                this.isShowSku=true;
            }
        }
    }
}
</script>

<style lang="less" scoped>
// 商品信息
.info {
    background-color: #fff;
    padding: 0.20rem;
    .name {
        font-size: 0.25rem;
        font-weight: 700;
        line-height: 0.40rem;
        padding: 0.10rem;
    }
    .brief {
        padding: 0.10rem;
    }
    .price {
        padding: 0.10rem;
        color: red;
        height: 0.20rem;
        line-height: 0.20rem; 
        font-size: 0.20rem;
    }
}
// 弹出层
.van-cell {
    border-top: 1px solid #ccc;
    text-align: left;
}
// 商品规格参数
.arrtibute {
    margin-top: 0.10rem;
    padding: 0.20rem 4%;
    background-color: #fff;
    text-align: left;
    h3{
        height: 0.50rem;
        line-height: 0.50rem;
        font-weight: 700;
        font-size: 0.20rem;
    }
    li {
        margin: 0.05rem 0;
        background-color: #efefef;
        height: 0.40rem;
        line-height: 0.40rem;
        border-radius: 0.10rem;
        display: flex;

        .leftAttrName {
            flex:3;
            text-align: right;
            padding-right: 0.10rem;
            font-size: 0.10rem;
        }
        .rightAttrValue {
            flex: 7;
            font-size: 0.16rem;
        }
    }
}

//商品详细信息
//深度样式，无视UI组件的自带样式
/deep/.goods_desc {
    img{
        display: block;
        width: 100%;
    }
}

//分割线
.van-divider {
    font-size: 0.20rem;
    font-weight:700;
    color: #000000;
}

//常见问题
.issue {
    background-color: #fff;
    padding:0.20rem;
    text-align: left;
    li {
        list-style:square;
        margin-left: 0.20rem;
        width: 100%;
    }
    h3 {
        font-size: 0.15rem;
        font-weight: 700;
    }
    p {
        font-size: 0.12rem;
        padding:0.20rem 0;
    }
}

//推荐商品部分
.recommendation {
    background-color: #fff;
    padding:0.20rem;
    margin: 0.20rem 0;
}
</style>
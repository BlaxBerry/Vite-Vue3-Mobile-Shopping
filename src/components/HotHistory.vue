<template>
    <div>
        <!-- 搜索历史记录 -->
        <div class="hot-history">
            <!-- top tittle-->
            <div class="top">
                <h3>浏览历史记录</h3>
                <!-- 删除icon -->
                <van-icon name="delete" />
            </div>
            <!-- bottom tags-->
            <div class="bottom">
                <van-tag 
                    plain type="default" 
                    v-for="(item,index) in historyKeywordList" 
                    :key="index"
                    @click = "tagClick(item)">
                    {{item}}
                </van-tag>
            </div>
        </div>

        <!-- 热门搜索 -->
       <div class="hot-history">
            <!-- top tittle-->
            <div class="top">
                <h3>热门搜索</h3>
            </div>
            <!-- bottom tags-->
            <div class="bottom">
                <van-tag 
                    plain type="default" 
                    v-for="(item,index) in hotKeywordList" 
                    :key="index"
                    :class="item.is_hot==1?'hotTagRed':''"
                    @click = "tagClick(item.keyword)">
                    {{item.keyword}}
                </van-tag>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {


        }
    },
    props: ['historyKeywordList',"hotKeywordList"],
    methods:{
        // 点击tag标签 搜索商品
        tagClick(value){
            console.log(value);
            this.$emit("tagClick",value)
        }
    }
}
</script>

<style lang="less" scoped>
.hot-history {
    background-color: #fff;
    padding: .20rem;// html font-size=100px
    margin-bottom: .20rem;
    font-size: .20rem;

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h3 {
            font-size: .20rem;
            font-weight: 700;
        }

    }
    .bottom {
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.20rem;

        .van-tag {
            margin-top:0.10rem;
            margin-right:0.10rem;
            padding: 0.05rem;
        }
    }
}
.hotTagRed {
    color: red;
}
</style>
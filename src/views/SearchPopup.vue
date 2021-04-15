<template>
    <div class="search-popup">
        <!-- 搜索弹出框 -->

        <van-search
            v-model="searchValue"
            show-action
            :placeholder="placeholderValue"
            @search="onSearch"
            @cancel="onCancel"
            @input="onInput" 
        />

        <!-- 历史记录+热门搜索/搜索关键字提示列表/搜索结果商品列表 3个组件-->
        <!-- 历史记录+热门搜索 -->
        <HotHistory 
            v-if="blockShow==1" 
            :historyKeywordList="historyKeywordList" 
            :hotKeywordList="hotKeywordList">
        </HotHistory>

        <!-- 搜索关键字提示列表 -->
        <SearchList
            v-if="blockShow==2" 
            :searchTipList="searchTipList"
        ></SearchList>

        <!-- 搜索结果商品列表 -->
      
    </div>
  
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
// 导入 历史记录和热门搜索 组件
import HotHistory from '@/components/HotHistory.vue'

// 导入搜索窗口数据接口请求api
import {GetSearchPopupData,GetSearchTipListData} from "@/request/api"

// 导入 搜索列表 组件
import SearchList from '@/components/SearchList.vue'

export default {
    data() {
        return {
            // top搜索框内容value
            searchValue: '',
            // top搜索框placeholder内容
            placeholderValue:'',
            // 历史记录+热门搜索/搜索关键字提示列表/搜索结果商品列表 3个组件显示与否
            // blockShow==1: 历史记录+热门搜索
            // blockShow==2: 搜索关键字提示列表
            // blockShow==3: 搜索结果商品列表
            blockShow: 1,
            // 历史记录
            historyKeywordList:[],
            //热门搜索
            hotKeywordList:[],
            // 搜索提示列表
            searchTipList:[]
        };
    },
    methods: {
        onSearch(val) {
            // enter 输入的值
            console.log('onsearch',val);
            this.blockShow = 3;
        },
        onCancel() {
            // 点击取消，通过URL路径离场动画,返回上一层路径
            // this.$router.push('/home');
            this.$router.go(-1);
        },
        onInput(val){
            // 输入框内容变化时
            // 发送请求，获取实时输入的文本
            this.blockShow = 2;
            GetSearchTipListData({keyword:val}).then(result=>{
                console.log(result.data);
                this.searchTipList = result.data.data;
            })
        }
    },
    created(){
        GetSearchPopupData().then(result=>{
            // console.log(result.data.data);
            // 请求获得 placeholderValue的数据
            this.placeholderValue=result.data.data.defaultKeyword.keyword;
            
            // 历史记录和热门搜索
            // 父传子给
            this.historyKeywordList = result.data.data.historyKeywordList;
            this.hotKeywordList = result.data.data.hotKeywordList;
        })
     
    },
    components:{
        HotHistory,
        SearchList
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
        background-color:#efefef;
    }
</style>
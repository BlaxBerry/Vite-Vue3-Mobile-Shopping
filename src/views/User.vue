<template>
    <div>
        <!-- user 我的 -->

        <!-- VantUI layout布局组件 -->
        <van-row>
            <van-col span="8">
                <img :src="avatarSrc" alt="">
            </van-col>
            <van-col span="12">{{nickname}}</van-col>
            <van-col span="4" @click="overlayShow=!overlayShow">
                <van-icon name="arrow"/>
            </van-col>
        </van-row>


        <!-- VantUI grid宫格组件 -->
        <van-grid :column-num="3">
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
        </van-grid>


        <!-- 遮罩层淡入动画 -->
        <transition name="van-fade">
         <!-- VantUI overlay 登陆遮罩层 -->
            <van-overlay :show="overlayShow" z-index="222" @click="overlayShow=!overlayShow">
                <div class="wrapper" @click.stop>
                <!-- VantUI 登陆表单 -->
                    <van-form @submit="onSubmit">
                        <van-field
                            v-model="username"
                            name="用户名"
                            label="用户名"
                            placeholder="用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]"
                        />
                        <van-field
                            v-model="password"
                            type="password"
                            name="密码"
                            label="密码"
                            placeholder="密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                        />
                        <div style="margin: 16px;">
                            <van-button round block type="info" native-type="submit">提交</van-button>
                        </div>
                    </van-form>
                </div>
            </van-overlay>
        </transition>  



    </div>
</template>

<script>
// 引入接口请求api
import {GoLogin} from "@/request/api";
import Vue from 'vue';

export default {
    data() {
        return {
            // 遮罩层的显示隐藏
            overlayShow: false,
            // 表单
            username: '',
            password: '',
            // 登陆请求信息
            nickname: "用户登陆",
            avatarSrc: "https://www.dentalspeed.com/imgs/topo/icones/user.svg"
        };
    },
    // 登陆表单信息提交
    methods: {
        onSubmit(values) {
            // values是个对象{“用户名”“密码”}
            // console.log('submit', values);
            // console.log(values["用户名"],values["密码"]);

            // 发送登陆请求
            // 接口用户信息例子：  
            //              username:默认用户,pwd:111111
            //              username:日,pwd:111111
            GoLogin({ 
                username:values["用户名"],
                pwd:values["密码"]
            }).then((result)=>{

                console.log(result.data);
                
                if(result.data.errno == 0){
                    // 1.示登陆成功
                    Vue.prototype.$toast.success("登陆成功")

                    // 2.保存token到本地
                    localStorage.setItem("token",result.data.data.token);
                    localStorage.setItem("userInfo",JSON.stringify(result.data.data.userInfo))
                    
                    setTimeout(()=>{

                        // 3.遮罩层隐藏
                        this.overlayShow=!this.overlayShow;
                        // 4.将数据渲染到页面
                        this.nickname = result.data.data.userInfo.username;
                        this.avatarSrc = result.data.data.userInfo.avatar;                   
                    },1000)

                }else{
                     // 提示登陆失败
                     Vue.prototype.$toast("登陆失败 " + result.data.errmsg)
                    // 遮罩层隐藏
                      setTimeout(()=>{
                         this.overlayShow=!this.overlayShow;
                    },1000)
                }
            })


        },
    },
};
</script>

<style lang="less">
// 栅格布局
.van-row {
    padding: 0.20rem 4%;
    color: #fefefe;
    background-color: #333;
    .van-col{
        height: 1rem;
        font-size: 0.20rem;
        font-weight: 700;
        line-height: 1rem;
        
        img {
            display: block;
            border-radius: 50%;
            width: 0.80rem;
        }
        
    }
}
// 登陆表单
.van-form {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
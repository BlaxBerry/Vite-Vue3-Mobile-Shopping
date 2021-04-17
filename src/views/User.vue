<template>
    <div>
        <!-- user 我的 -->

        <!-- VantUI layout布局组件 -->
        <van-row @click="overlayShow=!overlayShow">
            <van-col span="8">
                <img src="../assets/logo.png" alt="">
            </van-col>
            <van-col span="12">用户登陆</van-col>
            <van-col span="4" >
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
export default {
    data() {
        return {
            // 遮罩层的显示隐藏
            overlayShow: false,
            // 表单
            username: '',
            password: '',
        };
    },
    // 登陆表单信息提交
    methods: {
        onSubmit(values) {
            console.log('submit', values);
            this.overlayShow=!this.overlayShow
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
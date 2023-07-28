<template>
    <div class="wrap">
        <div class="login">
            <div class="login-left">
                <div class="icon">
                    <span class="iconfont icon-shu1"></span>
                    <p>教育管理系统</p>
                </div>
                <div class="welcom">
                    <p>欢迎回来</p>
                    <span>水静流深，涂歌巷舞</span>
                </div>
                <div class="register">
                    <p>没有账号去注册</p>
                </div>
            </div>
            <div class="login-right">
                <h3 class="title">后台登录</h3>
                <div class="user form">
                    <span class="iconfont icon-yonghu-xianxing"></span>
                    <input type="text" placeholder="请输入用户名">
                </div>
                <div class="pwd form">
                    <span class="iconfont icon-suo"></span>
                    <input type="password" placeholder="请输入密码">
                </div>
                <div class="yzm form">
                    <span class="iconfont icon-yanzhengyanzhengma"></span>
                    <input type="input" placeholder="请输入验证码">
                </div>
                <button class="btn" @click="login">
                    <p>现在登录</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const login = ()=>{
    router.push('/Main')
}
</script>

<style scoped lang="less">
@import url(../ulits/icon.css);
.wrap {
    width: 100%;
    height: 100vh;
    background-color: #F5F9FA;
    display: flex;
    justify-content: center;
    align-items: center;
    .login {
        display: flex;
        width: 1200px;
        height: 784px;
        overflow: hidden;
        .login-left {
            background: linear-gradient(180.83deg, #3CB09E 0%, #2BC17B 100%);
            width: 450px;
            height: 784px;
            color: #fff;
            .icon {
                margin: 45px 0 0 60px;
                display: flex;
                align-items: center;
                
                p {
                    margin-left: 10px;
                    font-size: 16px;
                }
            }

            .welcom {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                margin-top: 246px;

                span {
                    font-size: 12px;
                    margin-top: 17px;
                }

            }

            .register {
                width: 255px;
                height: 65px;
                margin: 84px auto;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                border-radius: 32.5px;
                border: 1px solid #fff;
            }
            .register:hover p{
                text-decoration: underline;
            }
        }

        .login-right {
            width: 750px;
            height: 800px;
            background: #fff;
            perspective: 800px;
            .title {
                color: #2BC17B;
                font-size: 50px;
                margin-top: 132px;
                margin-bottom: 50px;
                text-align: center;
                font-weight: normal;
            }

            .form {
                position: relative;
                width: 455px;
                height: 65px;
                border-radius: 5px;
                overflow: hidden;
                margin: 30px auto;

                span {
                    position: absolute;
                    top: 50%;
                    left: 10px;
                    margin-top: -6px;
                }

                input {
                    font-size: 16px;
                    background-color: #F5F9FA;
                    width: 455px;
                    height: 65px;
                    border: none;
                    outline: none;
                    padding-left: 40px;
                }
            }
            .btn{
                width: 255px;
                height: 65px;
                border: none;
                background: #2BC17B;
                border-radius: 32.5px;
                font-size: 18px;
                color: #fff;
                display: block;
                margin:60px auto;
            }
            .btn:hover{
                transform: translateZ(10px);
            }
            .btn p:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
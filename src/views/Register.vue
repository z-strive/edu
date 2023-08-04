<template>
    <div class="wrap">
        <h2>用户注册</h2>
        <form autocomplete="off" @submit.prevent="onSubmit">
            <div class="a">
                <div class="left">
                    <div class="input1">
                        <label for="familyName">姓:</label>
                        <input type="text" required id="familyName" name="familyName" v-model="familyName"
                          >
                    </div>
                    <div class="input1">
                        <label for="name">名:</label>
                        <input type="text" required id="name" v-model="name" >
                    </div>
                    <div class="input1">
                        <label for="email">邮箱:</label>
                        <input type="email" required id="email" v-model="email" >
                    </div>
                    <div class="input1">
                        <label for="tel">手机号:</label>
                        <input type="tel" required id="tel" v-model="tel" >
                    </div>
                    <span class="red" v-show="telif">请输入正确的手机号</span>
                    <div class="input1">
                        <label for="address">地址:</label>
                        <input type="text" required id="address" v-model="address" >
                    </div>
                    <div class="input1">
                        <label for="age">年龄:</label>
                        <input type="text" required id="age" v-model="age" >
                    </div>
                </div>
                <div class="right">

                    <!-- 英文名字 -->
                    <div class="input1">
                        <label for="EnglishName">英文名:</label>
                        <input type="text" required id="EnglishName" v-model="EnglishName">
                    </div>
                    <!-- 角色 -->
                    <div class="input1">
                        <label for="role">请选择角色</label>
                        <select id="role" v-model="role" placeholder="请选择">
                            <option value="Administrator">管理员</option>
                            <option value="stylist">设计师</option>
                            <option value="InventoryKeeper">库管</option>
                            <option value="Engineer">工程师</option>
                        </select>
                    </div>
                    <!-- 简历 -->
                    <div class="input1">
                        <label for="desc">简介:</label>
                        <textarea name="" id="desc" cols="30" rows="10" v-model="desc"></textarea>
                    </div>
                    <!-- 密码 -->
                    <div class="input1">
                        <label for="password">密码:</label>
                        <input type="password" required id="password" v-model="password" >
                    </div>

                </div>

            </div>
            <button type="submit" @click="submitForm">提交</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
import { getRegister } from '../api';
let familyName = ref()
let name = ref()
let email = ref()
let tel = ref()
let address = ref()
let age = ref()
let EnglishName = ref()
let role = ref()
let desc = ref()
let password = ref()
let telif = ref(false)

const onSubmit=() =>{
    getRegister({
        firstName :familyName.value,
        lastName:name.value,
        email:email.value,
        phone:tel.value,
        address:address.value,
        age:age.value,
        englishName:EnglishName.value,
        password:password.value
    }).then(res=>{
        if(res.status==1) router.push('/login')
        
    })
    
}
</script>

<style scoped lang="less">
.wrap {
    width: 1200px;
    max-height: 70vh;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;

    .red {
        width: 300px;
        color: red;
        font-size: 10px;
        display: block;
        text-align: center;
        margin-left: 180px;
        height: 10px;
    }

    h2 {
        width: 1200px;
        text-align: center;

    }

    .a {
        display: flex;
    }

    .left,
    .right {
        width: 600px;
        height: 55vh;

    }

    label {
        display: block;
        width: 200px;
        text-align: right;
        margin-right: 20px;
        height: 40px;
        line-height: 40px;
    }

    .input1 {
        display: flex;
        margin-top: 30px;
    }

    input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    select {
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        color: #333;
        width: 200px;
        outline: none;
    }

    select:hover {
        border-color: #3b82f6;
    }

    select:focus {
        border-color: #1d4ed8;
    }

    textarea {
        padding: 10px;
        font-size: 16px;
        border: 2px solid #ccc;
        border-radius: 6px;
        background-color: #f9f9f9;
        color: #333;
        width: 300px;
        resize: none;
        outline: none;
    }

    textarea:hover {
        border-color: #3b82f6;
    }

    textarea:focus {
        background-color: #fff;
    }

    input:hover {
        border-color: #3b82f6;
    }

    input:focus {
        border-color: #1d4ed8;
    }

    button[type="submit"] {
        background-color: #3b82f6;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 80%;
        font-size: 16px;
        margin: auto;
        display: block;
        text-align: center;
    }

    button[type="submit"]:hover {
        background-color: #1d4ed8;
    }

    button[type="submit"]:focus {
        outline: none;
    }

    button[type="submit"]:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
}
</style>